<template>
  <div id="app">
    <b-container>
      <Header />
      <b-row>
        <router-view/>
        <sidebar-menu :menu="menu" :theme="theme"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  name: 'App',
  components: {
    Header,
    SidebarMenu
  },
  data: function () {
    return {
      menu: [
        {
          header: true,
          title: 'Client Dashboard'
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-tachometer-alt'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-line'
        },
        {
          href: '/users',
          title: 'Users',
          icon: 'fa fa-users'
        }
      ],
      theme: 'white-theme'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background: #2c3e50;*/
  /*color: #fff;*/
  color: #2c3e50;
}
#app .container {
  max-width: 90vw;
}
</style>
