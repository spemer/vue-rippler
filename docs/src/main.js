import 'babel-polyfill'
import 'event-source-polyfill'

import Vue from 'vue'
import App from './App.vue'
// import router from './routes'
import VTooltip from 'v-tooltip'
import Toasted from 'vue-toasted'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import VueRippler from '../../src/vue-rippler'

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueRippler)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
