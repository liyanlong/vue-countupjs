import VueCountUp from './component.js'
import install from './install.js'
import {inBrowser} from './utils/dom.js'

VueCountUp.version = process.env.version
VueCountUp.install = install

module.exports = VueCountUp

if (inBrowser && window.Vue) {
  window.Vue.use(VueCountUp)
}
