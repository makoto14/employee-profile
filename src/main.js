import Vue from 'vue'
import App from './App.vue'

import Vuesax from '../node_modules/vuesax/dist/vuesax.min.js'
import '../node_modules/vuesax/dist/vuesax.min.css'

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})
