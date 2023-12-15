import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/layout/HomeView.vue'
import EntrepriseView from '../pages/layout/EntrepriseVue.vue'
import HowItWorksVue from '../pages/layout/HowItWorksVue.vue'
import LoginVue from '../pages/layout/LoginView.vue'
import SignUpVue from '../pages/layout/SignUpView.vue'
import SignClient from '../components/componentsSignUp/SignClient.vue'
import SignCandidat from '../components/componentsSignUp/SignCandidat.vue'
import HomeCandidat from '../pages/candidat/HomeCandidat.vue'


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
  },
  {
    path: '/signClient',
    name: 'signClient',
    component: SignClient
  },
  {
    path: '/signCandidat',
    name: 'signCandidat',
    component: SignCandidat
  },
  {
    path: '/HomeCandidat',
    name: 'HomeCandidat',
    component: HomeCandidat,
    children: [
      {
      path: '/accueil',
      name: 'accueil',
      component: () => import('../components/componentsCandidat/accueilCandidat.vue')
      },
      {
      path: '/opportunities',
      name: 'opportunity',
      component: () => import('../components/componentsCandidat/opportunitiesCandidat.vue')
      },
      {
      path: '/apps',
      name: 'apps',
      component: () => import('../components/componentsCandidat/appsCandidat.vue')
      },
      {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/componentsCandidat/profileCandidat.vue'),
      },
      {
      path: '/messages',
      name: 'messages',
      component: () => import('../components/componentsCandidat/messagesCandidat.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
