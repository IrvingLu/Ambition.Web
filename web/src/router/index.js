/*
 * @Author: your name
 * @Date: 2021-08-18 16:34:06
 * @LastEditTime: 2021-08-19 11:15:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
import Home from '../views/Home/home.vue'
import Screen from '../views/Home/screen.vue'
import User from '../views/System/User/user.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/system/user',
        name: 'User',
        component: User
      }
    ]
  },
  {
    path: '/screen',
    name: 'Screen',
    component: Screen,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
