<template>
  <div>
    <section>
      <v-countup 
        :start-value="startValue"
        :end-value="endValue"
        :decimals="decimals"
        :duration="duration"
        :options="options"
        :delay="delay"
        tag="h1"
        class="jumbo" 
        ref="countup"
        @callback="callback">
      </v-countup>
    </section>
    <section>
        <form>
            <h4 class="inlineLeft noMargin weight300">Params:</h4>
            <div class="inlineLeft marginLeft marginRight">
                <input type="text" v-model.number="startValue" id="startVal" style="width:50px">
                <label class="inlineLabel">Start</label>
            </div>
            <input type="button" class="inlineLeft marginRight" value="Swap" @click="swapValues()" style="width:80px;">
            <div class="inlineLeft marginRight">
                <input type="text" v-model.number="endValue" id="endVal" style="width:50px">
                <label class="inlineLabel">End</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="number" v-model.number="decimals" id="decimals" step="1" style="width:50px">
                <label class="inlineLabel">Decimals</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="number" v-model.number="duration" id="duration" step=".1" style="width:50px">
                <label class="inlineLabel">Duration</label>
            </div>
             <div class="inlineLeft marginRight">
                <input type="number" v-model.number="delay" id="duration" step=".1" style="width:50px">
                <label class="inlineLabel">Delay</label>
            </div>
        </form>
    </section>
    <section>
        <form>
            <h4 class="inlineLeft noMargin weight300">Options:</h4>
            <div class="inlineLeft marginLeft marginRight">
                <input type="checkbox" v-model="options.useEasing"><label class="inlineLabel">Use easing</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="checkbox" v-model="options.useGrouping" ><label class="inlineLabel">Use grouping</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="text" v-model="options.separator" id="separator" style="width:15px; padding:0 5px;">
                <label class="inlineLabel">Separator</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="text" v-model="options.decimal" id="decimal" style="width:15px; padding:0 5px;" >
                <label class="inlineLabel">Decimal</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="text" v-model="options.prefix" id="prefix" style="width:15px; padding:0 5px;" >
                <label class="inlineLabel">Prefix</label>
            </div>
            <div class="inlineLeft marginRight">
                <input type="text" v-model="options.suffix" id="suffix" style="width:15px; padding:0 5px;" >
                <label class="inlineLabel">Suffix</label>
            </div>
        </form>
    </section>
    <section>
      <form>
          <h4 class="inlineLeft noMargin weight300">Methods:</h4>
          <input type="button" value="Start" @click="start()"  class="inlineLeft marginLeft marginRight">
          <input type="button" value="Pause/Resume" @click="pauseResume()" class="inlineLeft marginRight">
          <input type="button" value="Reset" @click="reset()" class="inlineLeft marginRight">
          <input type="button" value="Update:" @click="update()" class="inlineLeft" style="margin-right:2px">
          <div class="inlineLeft marginRight">
              <input type="text" v-model="updateValue" id="updateVal" style="width:50px" >
          </div>
          <input type="checkbox" v-model="checked"><label class="inlineLabel">Alert on complete</label>
      </form>
  </section>
  <section id="easingSection">
      <form>
          <h4 class="inlineLeft noMargin weight300">Custom easing:</h4>
          <div class="inlineLeft marginLeft">
            <select id="easingFnsDropdown" class="marginRight" v-model="selectedAnimateFn">
              <option value="easeOutExpo">easeOutExpo (default, built-in)</option>
              <option value="outQuintic">outQuintic</option>
              <option value="outCubic">outCubic</option>
            </select>
            <input type="button" value="Apply easing" @click="applyAnimation">
          </div>
      </form>
      <prism-code v-model="computedAnimationFn" language="js" title="'动画函数' + selectedAnimateFn"></prism-code>
  </section>
  </div>
</template>

<script>
import VueCountUp from 'vue-countupjs'
import PrismCode from '../PrismCode.vue'

const animateFnMap = {
  easeOutExpo (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
  },
  outQuintic (t, b, c, d) {
    var ts = (t /= d) * t
    var tc = ts * t
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t)
  },
  outCubic (t, b, c, d) {
    var ts = (t /= d) * t
    var tc = ts * t
    return b + c * (tc + -3 * ts + 3 * t)
  }
}

export default {
  name: 'BasicDemo',
  sort: 100,
  demoName: '基本案例',
  data () {
    return {
      version: VueCountUp.version,
      startValue: 50,
      endValue: 100,
      decimals: 2,
      duration: 1,
      updateValue: 5657,
      delay: 0,
      checked: false,
      selectedAnimateFn: "easeOutExpo",
      options: {
        useEasing: true, // toggle easing
        useGrouping: true, // 1,000,000 vs 1000000
        separator: ',', // character to use as a separator
        decimal: '.', // character to use as a decimal
        prefix: '', // optional text before the result
        suffix: '', // optional text after the result
        easingFn: animateFnMap['easeOutExpo']
      }
    }
  },
  computed: {
    computedAnimationFn () {
      return animateFnMap[this.selectedAnimateFn] ? animateFnMap[this.selectedAnimateFn] : null
    }
  },
  methods: {
    swapValues () {
      [this.startValue, this.endValue] = [this.endValue, this.startValue]
    },
    start () {
      const countup = this.$refs.countup
      countup.recreateCountUp()
    },
    pauseResume () {
      const countup = this.$refs.countup
      countup.pauseResume()
    },
    update () {
      const countup = this.$refs.countup
      countup.update(this.updateValue)
    },
    reset () {
      const countup = this.$refs.countup
      countup.reset()
    },
    callback (vm, countup) {
      if (this.checked) {
        alert('COMPLETE!')
      }
    },
    applyAnimation () {
      this.options.easingFn = omputedAnimationFn
      this.recreateCountUp()
    },
    parseJs (val) {
      let str = typeof val === 'string' ? val : String(val).trim()
      return Prism.highlight(str, Prism.languages.javascript)
    }
  },
  components: {
    PrismCode
  }
}
</script>