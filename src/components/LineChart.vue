<template>
  <GChart type="LineChart" :data="chartData"  :options="chartOptions" />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'LineChart',
  components: { GChart },
  props: ['chartData', 'chartOptions']
}
</script>

<style scoped>

</style>
