import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createMemoryHistory,createRouter} from 'vue-router'
import Zhi from './components/Zhi.vue'
import Xiao from './components/Xiao.vue'

const history = createMemoryHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Zhi},
        {path: '/xiao', component: Xiao}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
