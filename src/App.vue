<template>
  <div id="app">
    <b-container fluid >
      <Header :userName="userName"/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'App',
  components: {
    Header
  },
  data: function () {
    return {
      userName: ''
    }
  },
  beforeUpdate () {
    this.userName = localStorage.user
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
