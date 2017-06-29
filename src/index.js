import Component from './component.js'
import install from './install.js'

const VueCountUp = {
  version: process.env.version,
  install,
  component: Component
}

module.exports = VueCountUp
