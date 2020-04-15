import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  store
} from './store/store'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faPause,
  faPlay,
  faChevronDown,
  faHandPointUp
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(faArrowUp, faPause, faPlay, faChevronDown, faHandPointUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
