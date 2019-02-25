<template>
  <div class="users">
    <b-row>
      <b-col>
        <h1>Users page</h1>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <b-alert variant="success" show>This Page will show Users</b-alert>
        <Users />
        <b-alert variant="success" show>This Page will show Users</b-alert>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Users from '@/components/Users';
  export default {
    name: 'UsersPage',
    components: {Users}
  }
</script>

<style scoped>

</style>
