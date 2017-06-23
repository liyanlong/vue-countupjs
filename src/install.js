import VueCountUp from './component.js'

const defaultOptions = {
  name: 'v-countup'
}

export default function install (Vue, options = {}) {
  if (install.installed) {
    return
  }
  const globalOptions = Vue.util.extend({}, defaultOptions, options)
  Vue.component(globalOptions.name, VueCountUp)
  install.installed = true
}
