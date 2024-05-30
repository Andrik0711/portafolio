import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Animation } from '@midudev/tailwind-animations'
import App from './App.vue'
import './style.css'
import './index.css' // permite la interaccion con tailwind
import 'hover.css/css/hover-min.css' // agrega la inteaccion de animaciones de hover.css

const app = createApp(App)

app.use(createPinia())
app.mount('#app')
