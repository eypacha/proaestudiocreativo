import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LandingView from '../views/LandingView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Landing',
  //   component: LandingView
  // },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
