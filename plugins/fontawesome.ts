import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCalendar,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(
  faBars,
  faExclamationCircle,
  faCheckCircle,
  faLinkedinIn,
  faCalendar,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
