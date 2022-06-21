import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import NotFound from '../views/NotFound'


const routes = [{
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'log-in'
  },
  {
    path: '/signup',
    name: 'sign-up'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/setting',
    name: 'setting',
    component: () =>
      import ('../views/SettingPage')
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router