<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand href="#">Project Name</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ path: '/dashboard'}">Dashboard</b-nav-item>
          <b-nav-item :to="{ path: '/charts'}">Charts</b-nav-item>
          <b-nav-item :to="{ path: '/users'}">Users</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>

