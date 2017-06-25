import CountUp from 'countup.js'
import extend from './utils/extend'
import {hasClass, removeClass, addClass} from './utils/dom'
import {animationEnd} from './utils/event'

function _createCountUp (vm) {
  let countup = new CountUp(vm.$el, 
      vm.startValue, 
      vm.endValue, 
      vm.decimals,
      vm.duration,
      vm.options)
  return countup
}

const defaultsOptions = {
  useEasing: true, // toggle easing
  useGrouping: true, // 1,000,000 vs 1000000
  separator: ',', // character to use as a separator
  decimal: '.', // character to use as a decimal
  prefix: '', // optional text before the result
  suffix: '' // optional text after the result
}

const twoTypes = [Number, String]
const stringOrArray = [String, Array]
export default {
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    startValue: {
      type: twoTypes,
      default: 0
    },
    endValue: {
      type: twoTypes,
      default: 0
    },
    // number of decimal places, default 0
    decimals: {
      type: twoTypes,
      default: 0
    },
    // duration of animation in seconds, default 2
    duration: {
      type: twoTypes,
      default: 2
    },
    // optional object of options (see below)
    options: {
      type: Object,
      default () {
        return extend({}, defaultsOptions)
      }
    },
    immediate: {
      type: Boolean,
      default: true
    },
    delay: {
      type: twoTypes,
      default: 0
    },
    className: {
      type: stringOrArray,
      required: false
    }
  },
  data () {
    return {
      oldVal: null
    }
  },
  computed: {
    computedClass () {
      let className = this.className
      if (typeof className === 'string' && className !== '') {
        return className.includes(' ') ? className.split(' ') : className
      } else if (Array.isArray(className)) {
        return className
      }
      return null
    }
  },
  mounted () {
    this.createCountUp()
    if (this.immediate) {
      this.start()
    }
  },
  methods: {
    createCountUp () {
      if (this._countup && !this._countup.paused) {
        this._countup.reset()
      }
      return this._countup = _createCountUp(this)
    },
    recreateCountUp () {
      this.createCountUp()
      if (this.immediate) {
        this.start()
      }
    },
    start () {
      let vm = this
      let delay = Math.max(+this.delay, 0)
      function cancel () {
        vm.$el.removeEventListener(animationEnd, cancel)
      }
      function _start () {
        if (vm.computedClass && !hasClass(vm.$el, vm.computedClass)) {
          vm.$el.addEventListener(animationEnd, cancel, false)
          addClass(vm.$el, vm.computedClass)
        }
        vm._countup.start((lastTime) => {
          if (vm.computedClass && hasClass(vm.$el, vm.computedClass)) {
            removeClass(vm.$el, vm.computedClass)
            vm.$el.removeEventListener(animationEnd, cancel)
          }
          vm.$emit('callback', vm, vm._countup)
        })
      }

      if (delay > 0) {
        if (this.delayTimeout) { 
          clearTimeout(this.delayTimeout)
        }
        this.delayTimeout = setTimeout(_start, delay * 1000)
      } else {
         _start()
      }
    },
    update (val) {
      val = Number(val)
      if (isNaN(val)) {
        console.error('[vue-countup] update() Error! the val is not validate number')
        return
      }
      if (val === this.oldVal) {
        return
      }
      this.oldVal = val
      if (this.computedClass && !hasClass(this.$el, this.computedClass)) {
        addClass(this.$el, this.computedClass)
      }
      this._countup.update(val)
    },
    pauseResume () {
      this._countup.pauseResume()
    },
    reset () {
      this._countup.reset()
    }
  },
  render (h) {
    return h(this.tag, {}, '')
  },
  watch: {
    startValue (val) {
      val = Number(val)
      if (isNaN(val)) {
        console.warn('[vue-countup] Warning ! the prop startValue is not number')
        return
      }
      this.recreateCountUp()
    },
    endValue (val) {
      val = Number(val)
      if (isNaN(val)) {
        console.error('[vue-countup] Error! endValue is not number')
        return      
      }
      this.recreateCountUp()      
    },
    decimals (val) {
      val = Number(val)
      if (isNaN(val)) {
        console.error('[vue-countup] Error! decimals is not number')
        return
      }
      if (val > 20) {
        console.error('[vue-countup] Error! decimals over limit, the max decimals is 20')
        return
      }
      this.recreateCountUp()
    },
    duration (val) {
      val = Number(val)
      if (isNaN(val)) {        
        console.error('[vue-countup] Error! duration is not number')
        return
      }
      this.recreateCountUp()
    },
    delay (val) {
      val = Number(val)
      if (isNaN(val)) {        
        console.error('[vue-countup] Error! duration is not number')
        return
      }
      this.recreateCountUp()
    },
    options: {
      deep: true,
      handler(val) {
        let countup = this._countup
        if (val && typeof val === 'object') {
          for (var key in countup.options) {
            if (val.hasOwnProperty(key) && val[key] !== null) {
              countup.options[key] = val[key]
            }
          }
        }
        if (countup.options.separator === '') {
          countup.options.useGrouping = false
        }
      }
    }
  }
}