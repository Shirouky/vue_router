import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import On from '../views/On.vue'
import Off from '../views/Off.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/off',
    name: 'Off',
    component: On
  },
  {
    path: '/on',
    name: 'On',
    component: Off
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
