import { createApp } from 'vue'
import './main.css'
import { createPinia } from 'pinia'
import router from './routes'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
