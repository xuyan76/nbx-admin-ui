import { createApp } from 'vue'
import AcroVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(AcroVue, {
    componentPrefix: 'arco'
}).use(createPinia())

app.mount('#app')
