import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(ElementPlus)

app.use(router)
app.use(VueAxios, axios)
app.axios.defaults.baseURL = `http://${document.location.hostname}:3222`
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
