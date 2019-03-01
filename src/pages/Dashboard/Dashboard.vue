<template>
  <div class="dashboard content">
    <b-container fluid>
        <br/>
        <!--<div class="w-100"></div>-->
        <b-row>
          <b-col cols="12">
            <b-row>
              <b-col cols="12" md="6" xl="3">
                <SegmentCard :segments="cardDetails.totalSegments" :bookings="cardDetails.totalBookings"/>
              </b-col>
              <b-col cols="12" md="6" xl="3">
                <RevenueCard :revenue="cardDetails.totalRevenue" :monthRevenue="monthRevenueData" :monthRevenueOptions="monthRevenueOptions"/>
              </b-col>
              <b-col cols="12" xl="6">
                <ClientTable />
              </b-col>
            </b-row>
          </b-col>
          <br/>
        </b-row>
        <br/>
        <b-row>
          <b-col cols="12">
            <ChartJSExample :chartData="barChartData" :chartOptions="barChartOptions" />
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
// import TotalRevenue from '@/components/TotalRevenue'
import RevenueCard from '@/components/RevenueCard'
import SegmentCard from '@/components/SegmentCard'
import ClientTable from '@/components/ClientTable'
import ChartJSExample from '@/components/ChartJSExample'
import {SAMPLEDATA} from '@/data/constants'
import { map } from 'lodash'
import dashUtility from '@/utility/utility'

export default {
  name: 'Dashboard',
  components: { Header, SideNav, ColumnChart, LineChart, AreaChart, ComboChart, SegmentCard, RevenueCard, ClientTable, ChartJSExample },
  data: function () {
    return {
      cardDetails: {
        totalSegments: null,
        totalBookings: null,
        totalRevenue: null
      },
      monthRevenueData: {
        labels: null,
        datasets: []
      },
      monthRevenueOptions: null,
      barChartOptions: null,
      barChartData: null
    }
  },
  beforeMount () {
    this.cardDetails.totalSegments = SAMPLEDATA.dashboarddata.totalsegments
    this.cardDetails.totalBookings = SAMPLEDATA.dashboarddata.totalbookings
    this.cardDetails.totalRevenue = SAMPLEDATA.dashboarddata.totalrevenueamt
    this.monthRevenueData.labels = map(SAMPLEDATA.dashboarddata.revenuePerDay, 'date')
    // let tmp = map(SAMPLEDATA.dashboarddata.revenuePerDay, 'revenue')

    let tempDataSet = {
      label: 'revenue',
      backgroundColor: 'transparent',
      borderColor: 'white',
      pointRadius: -5,
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'red',
      pointHoverBorderWidth: 2,
      pointHoverRadius: 3,
      data: map(SAMPLEDATA.dashboarddata.revenuePerDay, 'revenue')
    }
    // let tempDataSet = [
    //   ['date', '$'],
    //   ...zip(this.monthRevenueData.labels, tmp)
    // ]

    // this.monthRevenueData = tempDataSet
    this.monthRevenueData.datasets.push(tempDataSet)
    this.monthRevenueOptions = dashUtility.getChartData('chartJSLine')
    this.barChartOptions = dashUtility.getChartData('chartJSEx')
    this.barChartData = {
      labels: [
        'Malindo Air',
        'Thai Lion Air',
        'Lion Air',
        'Bangkok Air',
        'Batik Air'
      ],
      datasets: [
        {
          label: 'B2C Y',
          backgroundColor: 'pink',
          borderColor: 'red',
          borderWidth: 1,
          data: [3, 5, 6, 7, 3]
        },
        {
          label: 'B2B Y',
          backgroundColor: 'lightblue',
          borderColor: 'blue',
          borderWidth: 1,
          data: [4, 7, 3, 6, 10]
        },
        {
          label: 'B2C T',
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          borderWidth: 1,
          data: [10, 7, 4, 6, 9]
        },
        {
          label: 'B2B T',
          backgroundColor: 'yellow',
          borderColor: 'orange',
          borderWidth: 1,
          data: [6, 9, 7, 3, 10]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
