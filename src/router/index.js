import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/pages/Dashboard/Dashboard'
import Charts from '@/pages/Charts/Charts'
import UsersPage from '@/pages/UsersPage/UsersPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
