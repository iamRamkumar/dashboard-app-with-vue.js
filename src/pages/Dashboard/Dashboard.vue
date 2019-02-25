<template>
  <div class="dashboard">
      <b-row>
        <b-col lg="1" xs="12" >
          <SideNav />
        </b-col>
        <b-col lg="11" xs="12">
          <Header />
          <h5 class="text-left">
            Users:
          </h5>
          <Users />
          <h5 class="text-left">
            Charts:
          </h5>
          <ColumnChart />
        </b-col>
      </b-row>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import SideNav from '@/components/SideNav';
  import ColumnChart from '@/components/ColumnChart';
  import Users from '@/components/Users';

  export default {
    name: 'Dashboard',
    components: {Header, SideNav, ColumnChart, Users}
  }
</script>

<style scoped>

</style>
