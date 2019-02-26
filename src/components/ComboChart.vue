<template>
  <div>
    <h4 class="text-left mx-2">Combo Chart:</h4>
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
  name: 'ComboChart',
  components: { GChart },
  data: function () {
    return {
      chartData: [
        ['Name', '1-B2B', '1-B2C', '2-B2B', '2-B2C'],
        ['Malindo Air', 1000, 400, 1050, 450],
        ['Thai Lion Air', 1270, 460, 1170, 560],
        ['Lion Air', 2660, 1120, 2960, 1120],
        ['Bangkok Air', 1555, 299, 1555, 500],
        ['Batik Air', 660, 1120, 660, 1120]
      ],
      chartOptions: {
        chart: { title: 'Company Performance' },
        colors: ['#1b9e77', '#d95f02', '#7570b3', '#EFC535'],
        hAxis: {
          textStyle: { color: 'black  ' }
        },
        vAxis: {
          gridlines: {
            color: 'transparent'
          },
          textStyle: { color: 'black' }
        },
        seriesType: 'bars',
        backgroundColor: 'transparent',
        legend: { position: 'right', textStyle: { color: 'black' } }
      }
    }
  }
}
</script>

<style scoped>

</style>
