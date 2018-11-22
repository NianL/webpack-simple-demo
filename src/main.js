import Vue from 'vue'
import App from './App.vue'

import LDialog from './lib/component/index'

Vue.use(LDialog);

new Vue({
  el: '#app',
  render: h => h(App)
})
