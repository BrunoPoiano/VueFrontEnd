import { createRouter, createWebHistory } from 'vue-router'
import VuexPage from '../views/VuexPage.vue'
import NormalPage from '../views/NormalPage.vue'
import GridPage from '../views/GridPage.vue'
import EffectsPage from '../views/EffectsPage.vue'

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
  },
  {
    path: '/grid-page',
    name: 'gridPage',
    component: GridPage
  },
  {
    path: '/effects-page',
    name: 'effectsPage',
    component: EffectsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
