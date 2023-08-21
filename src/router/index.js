import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/HistoryPage.vue')
  },
  {
    path: '/faculty',
    name: 'faculty',
    component: () => import(/* webpackChunkName: "about" */ '../views/FacultyPage.vue')
  },
  {
    path: '/counselling',
    name: 'counselling',
    component: () => import(/* webpackChunkName: "about" */ '../views/CounsellingPage.vue')
  },
  {
    path: '/admission',
    name: 'admission',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdmissionPage.vue')
  },
  {
    path: '/directentry',
    name: 'directentry',
    component: () => import(/* webpackChunkName: "about" */ '../views/DirectEntry.vue')
  },
  {
    path: '/postgraduate',
    name: 'postgraduate',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostGraduate.vue')
  },
  {
    path: '/JupebProg',
    name: 'jupebprog',
    component: () => import(/* webpackChunkName: "about" */ '../views/JupebProg.vue')
  },
  {
    path: '/PreDegree',
    name: 'PreDegree',
    component: () => import(/* webpackChunkName: "about" */ '../views/PreDegree.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    //Always scroll to top
    return {top: 0}
  }
})

export default router
