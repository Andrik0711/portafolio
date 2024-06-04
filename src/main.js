import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import router from './router' // importa las rutas de la aplicacion
import './style.css'
import './index.css' // permite la interaccion con tailwind
import 'hover.css/css/hover-min.css' // agrega la inteaccion de animaciones de hover.css

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
