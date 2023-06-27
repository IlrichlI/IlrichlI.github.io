import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { PersianComponents } from 'persian-components'
import 'persian-components/style.css'

const app = createApp(App)

app.use(router)
app.use(PersianComponents)

app.mount('#appp')
