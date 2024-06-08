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
const api_host = import.meta.env.VUE_APP_BASE_API;
app.axios.defaults.baseURL = api_host || "http://localhost:3222"
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
