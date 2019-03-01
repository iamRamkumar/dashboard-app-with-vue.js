<template>
  <!--<GChart type="LineChart" :data="monthRevenue"  :options="monthRevenueOptions" />-->
  <MonthRevenue :chartData="monthRevenue" :chartOptions="monthRevenueOptions"/>
</template>

<script>
// import { GChart } from 'vue-google-charts'
import MonthRevenue from '@/components/MonthRevenue'
export default {
  name: 'RevenueChart',
  components: {MonthRevenue},
  props: ['monthRevenue', 'monthRevenueOptions']
}
</script>

<style scoped>

</style>
