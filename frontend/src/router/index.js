import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'CryptoList',
    component: () => import('../views/CryptoList.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
