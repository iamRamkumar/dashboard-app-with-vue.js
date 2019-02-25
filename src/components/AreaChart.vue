<template>
  <div>
    <b-row>
      <b-col>
        <h4 class="text-left mx-2">Area Chart:</h4>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <GChart
          type="AreaChart"
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
    name: 'AreaChart',
    components:{ GChart },
    data: function() {
      return {
        chartData: [
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000, 400],
          ['2014',  1170, 460],
          ['2015',  2660, 1120],
          ['2017',  1555, 2999],
          ['2018',  660, 1120],
          ['2019',  1660, 1120],
          ['2016',  300, 540]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
          },
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          legend: { position: 'bottom' }
        }

      }
    }
  }
</script>

<style scoped>

</style>
