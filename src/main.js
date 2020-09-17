import { createApp } from 'vue'
import Vant from 'vant';
import 'vant/lib/index.less';

import router from './router'
import store from './store'

import App from './App.vue'
import './index.css'

// 引入自定义指令
import directiveObj from './directives'

// 引入api
import api from './api'

// 引入echarts
import echarts from 'echarts'
import '@/assets/echartTheme/plume_1.js'
import '@/assets/echartTheme/plume_2.js'

// 配置全局mixin
const Mixin = {
  data() {
    return {
      echarts,
      api
    }
  }
}

const app = createApp(App)
for (let key in directiveObj) {
  app.directive(key, directiveObj[key])
}
app.use(Vant).use(router).use(store).mixin(Mixin).mount('#app')

