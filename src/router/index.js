import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {

    path:'/Register',
    name:'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Reg-Log/Register')
  },
  {

    path:'/Login',
    name:'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Reg-Log/Login')
  },
  {

    path:'/Password',
    name:'Password',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Reg-Log/Password')
  },
  {

    path:'/NewPassword',
    name:'NewPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Reg-Log/NewPassword')
  },
  {

    path:'/Plan',
    name:'Plan',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Reg-Log/Plan')
  },
  {

    path:'/Candidates',
    name:'Candidates',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Candidate/Candidates')
  },
  {

    path:'/InformationCandidate',
    name:'InformationCandidate',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Candidate/InformationCandidate')
  },
  {

    path:'/PoliticalParties',
    name:'PoliticalParties',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/PolicitalPartie/PoliticalParties')
  },
  {

    path:'/InformationPolitical',
    name:'InformationPolitical',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/PolicitalPartie/InformationPoliticalParties')
  },
  {

    path:'/Presidents',
    name:'Presidents',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/President/Presidents')
  },
  {

    path:'/InformationPresident',
    name:'InformationPresident',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/President/InformationPresident')
  },
  {

    path:'/Legal',
    name:'Legal',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/President/Legal')
  },
  {

    path:'/Biography',
    name:'Biography',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/President/Biography')
  },
  {

    path:'/Investment',
    name:'Investment',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/President/Investment')
  },
  {

    path:'/Questions',
    name:'Questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Questions/Questions')
  },
  {

    path:'/Final',
    name:'Final',
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Questions/Final')
  },
  {

    path:'/AHome',
    name:'AHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/AHome')
  },
  {

    path:'/ARegister',
    name:'ARegister',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/Register/ARegister')
  },
  {

    path:'/Profile',
    name:'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/Register/Profile')
  },
  {

    path:'/APeriod',
    name:'APeriod',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/Period/APeriod')
  },
  {

    path:'/ADPeriod',
    name:'ADPeriod',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/Period/ADPeriod')
  },
  {

    path:'/ACandidates',
    name:'ACandidates',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/ACandidate/ACandidates')
  },
  {

    path:'/AInformationCandidate',
    name:'AInformationCandidate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/ACandidate/AInformationCandidate')
  },
  {

    path:'/Publications',
    name:'Publications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrator/Publications')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
