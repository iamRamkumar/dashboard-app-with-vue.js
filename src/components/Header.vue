<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse" />
      <b-navbar-brand href="#">Project Name</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ path: '/dashboard'}"><font-awesome-icon :icon="dashboardIcon"></font-awesome-icon> Dashboard</b-nav-item>
          <b-nav-item :to="{ path: '/charts'}"><font-awesome-icon :icon="chartIcon"></font-awesome-icon> Charts</b-nav-item>
          <b-nav-item :to="{ path: '/users'}"><font-awesome-icon :icon="usersIcon"></font-awesome-icon> Users</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTachometerAlt, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Header',
  components: {FontAwesomeIcon},
  data: function () {
    return {
      dashboardIcon: faTachometerAlt,
      chartIcon: faChartLine,
      usersIcon: faUsers
    }
  }

}
</script>

<style scoped>

</style>
