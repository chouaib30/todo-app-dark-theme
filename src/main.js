import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.config.productionTip = false

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faTrashAlt)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
