import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../view/index')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../view/home')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
