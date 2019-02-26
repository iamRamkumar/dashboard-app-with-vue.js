<template>
  <div class="dashboard">
    <b-container>
        <br/>
        <!--<div class="w-100"></div>-->
        <b-row>
          <b-col cols="12" sm="6" md="6">
            <TotalRevenue />
          </b-col>
          <br/>
          <b-col cols="12" sm="6"  md="6">
            <ClientTable />
          </b-col>
        </b-row>
        <br/>
        <b-row>
          <b-col cols="12" >
            <ComboChart />
          </b-col>
        </b-row>
    </b-container>
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
