<template>
  <div>
    <b-row>
      <b-col>
        <h4 class="text-left mx-2">Bar Chart:</h4>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <GChart
          type="ComboChart"
          :data="chartData"
          :options="chartOptions"
        />
      </b-col>
    </b-row>

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
        ['Client', 'B2B', 'B2C'],
        ['Malindo Air', 1000, 400],
        ['Thai Lion Air', 1170, 460],
        ['Lion Air', 2660, 1120],
        ['Bangkok Air', 1555, 2999],
        ['Batik Air', 660, 1120]
      ],
      chartOptions: {
        chart: { title: 'Company Performance' },
        bars: 'horizontal',
        colors: ['#1b9e77', '#d95f02', '#7570b3'],
        vAxis: { title: 'Some Attrib', titleTextStyle: {color: '#333'} },
        hAxis: { title: 'Client', titleTextStyle: {color: '#ddd'} },
        seriesType: 'bars',
        legend: { position: 'bottom' }
      }
    }
  }
}
</script>

<style scoped>

</style>
