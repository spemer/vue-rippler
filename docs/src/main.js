import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import VueRippler from '../../src/vue-rippler'

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueRippler)
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  render: h => h(App)
})
