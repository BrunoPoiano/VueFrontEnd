import { createRouter, createWebHistory } from 'vue-router'
import VuexPage from '../views/VuexPage.vue'
import NormalPage from '../views/NormalPage.vue'

const routes = [
  {
    path: '/',
    name: 'VuexPage',
    component: VuexPage
  },
  {
    path: '/normal-page',
    name: 'NormalPage',
    component: NormalPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
