<template>
  <div v-if="userName">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse" />
      <b-navbar-brand href="#">Project Name</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ path: '/dashboard'}"><font-awesome-icon :icon="dashboardIcon"></font-awesome-icon> Dashboard</b-nav-item>
          <b-nav-item :to="{ path: '/charts'}"><font-awesome-icon :icon="chartIcon"></font-awesome-icon> Charts</b-nav-item>
          <b-nav-item :to="{ path: '/revenue'}"><font-awesome-icon :icon="bank"></font-awesome-icon> Revenue</b-nav-item>
          <b-nav-item :to="{ path: '/tables'}"><font-awesome-icon :icon="table"></font-awesome-icon> Tables</b-nav-item>
          <b-nav-item @click="logout"><font-awesome-icon :icon="user"></font-awesome-icon> {{userName}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTachometerAlt, faChartLine, faTable, faUniversity, faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Header',
  components: {FontAwesomeIcon},
  props: ['userName'],
  data: function () {
    return {
      dashboardIcon: faTachometerAlt,
      chartIcon: faChartLine,
      table: faTable,
      bank: faUniversity,
      user: faUser
    }
  },
  mounted: function () {},
  methods: {
    logout () {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped>

</style>
