<template>
  <div>
    <b-row>
      <b-col>
        <h4 class="text-left mx-2">Line Chart:</h4>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <GChart
          type="LineChart"
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
    name: 'LineChart',
    components:{ GChart },
    data: function() {
      return {
        chartData: [
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000, 400],
          ['2005',  1170, 460],
          ['2006',  660,  1120],
          ['2007',  1030, 540]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
          },
          curveType: 'function',
          legend: { position: 'bottom' }
        }

      }
    }
  }
</script>

<style scoped>

</style>
