import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import UseCSVButton from '@usecsv/vuejs3'
import axios from 'axios'
import VueAxios from 'vue-axios'
import globalComponent from './plugins/global-components'

require('waypoints/lib/noframework.waypoints.min')

library.add(fas, far, fab)
dom.watch()

const app = createApp(App)
app.use(store)
app.use(router)
app.use(globalComponent)
app.use(UseCSVButton)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
export { app }
