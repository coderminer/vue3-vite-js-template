import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layouts/Layout.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
