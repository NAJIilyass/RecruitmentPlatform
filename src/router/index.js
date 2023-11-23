import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/layout/HomeView.vue'
import EntrepriseView from '../pages/layout/EntrepriseVue.vue'
import HowItWorksVue from '../pages/layout/HowItWorksVue.vue'
import LoginVue from '../pages/layout/LoginView.vue'
import SignUpVue from '../pages/layout/SignUpView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/entreprise',
    name: 'entreprise',
    component: EntrepriseView
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    component: HowItWorksVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
