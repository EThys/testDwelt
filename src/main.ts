import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import '@/scss/style.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import '@n8n/chat/style.css';
import '../src/chatBot.css'
import vue3dLoader from "vue-3d-loader";


const app = createApp(App)

app.use(createPinia())
app.use(router)
const vuetify = createVuetify({
  components,
  directives,
})

//@ts-ignore
app.use(PerfectScrollbar)
app.use(vuetify)
app.use(vue3dLoader)
app.mount('#app')


