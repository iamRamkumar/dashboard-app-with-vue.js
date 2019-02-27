import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/Dashboard/Dashboard'
import Charts from '@/pages/Charts/Charts'
import UsersPage from '@/pages/UsersPage/UsersPage'
import Table from '@/pages/Tables/Table'
import Revenue from '@/pages/Revenue/Revenue'
import LoginForm from '@/pages/Login/LoginForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DashBoard
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/users',
      name: 'UsersPage',
      component: UsersPage
    },
    {
      path: '/tables',
      name: 'Table',
      component: Table
    },
    {
      path: '/revenue',
      name: 'Revenue',
      component: Revenue
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
