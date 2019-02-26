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
        <b-row>
          <b-col  cols="12" sm="6">
            <TotalRevenue />
          </b-col>
          <br/>
          <b-col  cols="12" sm="6" >
            <ClientTable />
          </b-col>
        </b-row>
        <br/>
        <b-row>
          <b-col  cols="6">
            <ColumnChart />
          </b-col>
          <b-col cols="6">
            <LineChart />
          </b-col>
          <b-col cols="6">
            <AreaChart />
          </b-col>
          <b-col cols="6">
            <ComboChart />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import ColumnChart from '@/components/ColumnChart'
import LineChart from '@/components/LineChart'
import AreaChart from '@/components/AreaChart'
import ComboChart from '@/components/ComboChart'
import TotalRevenue from '@/components/TotalRevenue'
import ClientTable from '@/components/ClientTable'
import Users from '@/components/Users'

export default {
  name: 'Dashboard',
  components: { Header, SideNav, ColumnChart, Users, LineChart, AreaChart, ComboChart, TotalRevenue, ClientTable }
}
</script>

<style scoped>

</style>
