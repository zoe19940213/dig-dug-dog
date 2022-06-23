import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/styles/general.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faArrowRightFromBracket, faPaw, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faArrowRightFromBracket, faPaw, faMagnifyingGlass)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')