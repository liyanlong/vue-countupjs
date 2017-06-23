import Vue from 'vue'
import App from './App.vue'
import VueCountUp from 'vue-countupjs'

Vue.use(VueCountUp)
new Vue({
  el: '#wrap',
  render: h => h(App)
})
