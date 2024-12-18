import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import i18n from './i18n'

library.add(fas)

const app = createApp(App)

app.use(createPinia()).use(i18n)

app.mount('#app')
