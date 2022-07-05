import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/styles/general.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faArrowRightFromBracket, faPaw, faMagnifyingGlass, faPlay, faEye, faEyeSlash, faHeart, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faCommentDots } from '@fortawesome/free-regular-svg-icons'

library.add(faUser, faArrowRightFromBracket, faPaw, faMagnifyingGlass, faPlay, faEye, faEyeSlash, faHeart, faHeartRegular, faCommentDots, faCircleExclamation, faXmark)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')