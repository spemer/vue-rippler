import Vue from 'vue'
import App from './App.vue'
import VueRippler from '../../src/vue-rippler'

Vue.use(VueRippler)

new Vue({
  el: '#app',
  render: h => h(App)
})
