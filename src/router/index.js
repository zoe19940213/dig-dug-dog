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
    name: 'log-in',
    component: () =>
      import ('../views/LogIn')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () =>
      import ('../views/SignUp')
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/board/shopping',
    name: 'shopping-board',
    component: () =>
      import ('../views/ShoppingBoard'),
  },
  {
    path: '/board/medical',
    name: 'medical-board',
    component: () =>
      import ('../views/MedicalBoard'),
  },
  {
    path: '/board/knowledge',
    name: 'knowledge-board',
    component: () =>
      import ('../views/KnowledgeBoard'),
  },
  {
    path: '/board/getdogs',
    name: 'get-dogs',
    component: () =>
      import ('../views/GetDogs')
  },
  {
    path: '/topics/:category/:categoryId',
    name: 'topics',
    component: () =>
      import ('../views/TopicsBoard'),
  },
  {
    path: '/topics/:category/:categoryId/:topicId',
    name: 'topic',
    component: () =>
      import ('../views/SingleTopic'),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import ('../views/AboutPage')
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