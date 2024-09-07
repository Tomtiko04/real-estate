import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(bootstrap)
app.use(router)
app.use(ToastPlugin)

app.mount('#app')
