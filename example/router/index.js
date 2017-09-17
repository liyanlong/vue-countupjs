import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/README.md'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/demo',
    component: () => import('../pages/DEMO.md')
  },
  {
    path: '/api',
    component: () => import('../pages/API.md')
  },
  {
    path: '/changelog',
    component: () => import('../pages/CHANGELOG.md')
  }
]

const router = new VueRouter({
  routes
})

export default router
