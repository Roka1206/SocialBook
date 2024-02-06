import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'
import 'material-icons/iconfont/material-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
