import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
