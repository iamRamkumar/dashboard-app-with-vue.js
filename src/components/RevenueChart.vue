<template>
  <div>
    <GChart
      type="ComboChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'RevenueChart',
  components: {GChart},
  data: function () {
    return {
      chartData: [
        ['date', 'revenue in $'],
        ['05/09/2018', 3098.89],
        ['02/01/2017', 2659.70],
        ['07/11/2015', 3360.61],
        ['12/01/2014', 1338.60],
        ['08/07/2014', 3792.16],
        ['11/16/2018', 2474.11],
        ['11/29/2016', 3404.44],
        ['03/30/2014', 3684.19],
        ['03/06/2015', 2035.51],
        ['08/23/2018', 2251.94],
        ['03/30/2014', 1318.27],
        ['03/02/2016', 3360.75]
      ],
      chartOptions: {
        chart: { title: 'Revenue' },
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'transparent',
        vAxis: {
          gridlines: {
            color: 'transparent'
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
