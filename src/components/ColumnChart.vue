<template>
  <div>
    <b-row>
      <b-col>
        <h4 class="text-left">Column Chart:</h4>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
        />
      </b-col>
    </b-row>

  </div>

</template>

<script>
  import { GChart } from 'vue-google-charts';

  export default {
    name: 'ColumnChart',
    components: {
      GChart
    },
    data: function() {
      return {
        chartData: [
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350],
          ['2018', 1130, 1540, 1350]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2018'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
