import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Sobre from '@/pages/Sobre.vue'
import Videos from '@/pages/Videos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
