import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCalendar,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faBars)
library.add(faExclamationCircle)
library.add(faCheckCircle)
library.add(faLinkedinIn)
library.add(faCalendar)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
