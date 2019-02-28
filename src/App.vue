<template>
  <div id="app">
    <b-container fluid >
      <Header :userName="userName" :isLogin="userLoggedIn"/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import dashUtility from '@/utility/utility'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'App',
  components: {
    Header
  },
  data: function () {
    return {
      userName: '',
      userLoggedIn: false
    }
  },
  mounted () {
    this.userLoggedIn = dashUtility.isUserLoggedIn()
    // if (dashUtility.isUserLoggedIn()) {
    this.userName = dashUtility.isUserLoggedIn() ? dashUtility.getUser() : ''
    // }
  },
  beforeUpdate () {
    this.userLoggedIn = dashUtility.isUserLoggedIn()
    // if (dashUtility.isUserLoggedIn()) {
    this.userName = dashUtility.isUserLoggedIn() ? dashUtility.getUser() : ''
    // }
  },
  watch: {
    userLoggedIn: () => dashUtility.isUserLoggedIn,
    userName: () => dashUtility.getUser()
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
