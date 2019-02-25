<template>
  <div class="dashboard">
      <b-row>
        <b-col lg="1" xs="12" >
          <SideNav />
        </b-col>
        <b-col lg="11" xs="12">
          <Header />
          1 of 3
        </b-col>
      </b-row>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import SideNav from '@/components/SideNav';
  export default {
    name: 'Dashboard',
    components: {Header}
  }
</script>

<style scoped>

</style>
