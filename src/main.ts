import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import pinia from './stores'

// 全局引入
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
