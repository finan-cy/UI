import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/need',
      name: 'Need',
      component: () => import('../views/NeedView.vue')
    },
    {
      path: '/fun',
      name: 'Fun',
      component: () => import('../views/FunView.vue')
    },
    {
      path: '/saving',
      name: 'Saving',
      component: () => import('../views/SavingView.vue')
    }
  ]
})

export default router
