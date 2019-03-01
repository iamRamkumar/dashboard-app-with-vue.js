<template>
  <div class="charts">
    <br/>
    <b-row>
      <b-col>
        <ComboChart />
      </b-col>
    </b-row>
    <ChartJSExample :chartData="chartData" :chartOptions="chartOptions"/>
    <MonthRevenue :chartData="monthRevenueData" :chartOptions="monthRevenueOptions"/>
  </div>
</template>

<script>
import ComboChart from '@/components/ComboChart'
import ChartJSExample from '@/components/ChartJSExample'
import MonthRevenue from '@/components/MonthRevenue'
import dashUtility from '@/utility/utility'
import {SAMPLEDATA} from '@/data/constants'
import { map } from 'lodash'

export default {
  name: 'Charts',
  components: {ComboChart, ChartJSExample, MonthRevenue},
  data: function () {
    return {
      chartData: {
        // datacollection: {
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
        // }
      },
      chartOptions: dashUtility.getChartData('chartJSEx'),
      monthRevenueData: {
        labels: map(SAMPLEDATA.dashboarddata.revenuePerDay, 'date'),
        datasets: [
          {
            label: 'revenue',
            backgroundColor: 'transparent',
            pointBackgroundColor: 'red',
            borderColor: 'white',
            data: map(SAMPLEDATA.dashboarddata.revenuePerDay, 'revenue')
          }
        ]
      },
      monthRevenueOptions: dashUtility.getChartData('chartJSLine')
    }
  }
}
</script>

<style scoped>

</style>
