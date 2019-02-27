import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/Dashboard/Dashboard'
import Charts from '@/pages/Charts/Charts'
import UsersPage from '@/pages/UsersPage/UsersPage'
import Table from '@/pages/Tables/Table'
import Revenue from '@/pages/Revenue/Revenue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
