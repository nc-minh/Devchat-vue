import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/icofont.min.css'
import './assets/style/base.css'
import './assets/style/main.css'
import './assets/style/responsive.css'

createApp(App).use(store).use(router).mount('#app')
