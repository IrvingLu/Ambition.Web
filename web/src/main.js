/*
 * @Author: your name
 * @Date: 2021-08-18 16:34:06
 * @LastEditTime: 2021-08-20 11:15:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import { ElCollapseTransition } from 'element-plus';
import dataV from '@jiaminghi/data-view'
const app = createApp(App)
installElementPlus(app)
app.component(ElCollapseTransition.name, ElCollapseTransition)
app.use(store).use(router).use(dataV).mount('#app')