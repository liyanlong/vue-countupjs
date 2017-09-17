import Vue from 'vue'
import VueCountUp from 'vue-countupjs'

import router from './router/index.js'
import App from './App.vue'


Vue.use(VueCountUp)

new Vue({
  render: h => h(App),
  // vue-router instance
  router
}).$mount('#wrap')
