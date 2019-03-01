<template>
  <div class="box revenue_bg">
    <div class="total">
      <h3>$ {{revenue}}</h3>
      <h5>Total Revenue</h5>
    </div>
    <!--<b-row>-->
      <!--<b-col>-->
    <!--<b-row>-->
      <!--<b-col>-->
    <MonthRevenue :width="100" :height="100" :chartData="monthRevenue" :chartOptions="monthRevenueOptions"/>
      <!--</b-col>-->
    <!--</b-row>-->
    <div class="text-right"><small class="days_txt">Last 30 days</small></div>

    <!--</b-col>-->
    <!--</b-row>-->
    <!--<b-col>-->

    <!--</b-col>-->
  </div>
    <!--<b-card no-body bg-variant="primary" border-variant="warning" text-variant="black" class="revenue-card">-->
    <!--<b-card-body>-->
      <!--<b-row>-->
        <!--<b-col cols="12" sm="4" >-->
          <!--<b-col>-->
            <!--<font-awesome-icon :icon="bank" fixed-width size="6x" transform="shrink-6" :style="{ color: '#81A2B8', opacity: 0.6 }"></font-awesome-icon>-->
          <!--</b-col>-->
          <!--<b-card-title>-->
            <!--<font-awesome-icon :icon="dollar"></font-awesome-icon> {{revenue}}-->
          <!--</b-card-title>-->
          <!--<div class="w-100"></div>-->
          <!--<b-card-title>-->
            <!--Total Revenue-->
          <!--</b-card-title>-->
        <!--</b-col>-->
      <!--</b-row>-->
      <!--<b-row>-->
        <!--<b-col cols="12" sm="8">-->
          <!--<RevenueChart :monthRevenue="monthRevenue" :monthRevenueOptions="monthRevenueOptions" />-->
        <!--</b-col>-->
      <!--</b-row>-->
      <!--<div slot="footer" class="text-right my-3"><small class="text-warning text-uppercase font-weight-normal">Last 30 days</small></div>-->
    <!--</b-card-body>-->
  <!--</b-card>-->
</template>

<script>
import RevenueChart from '@/components/RevenueChart'
// import { GChart } from 'vue-google-charts'
import MonthRevenue from '@/components/MonthRevenue'
export default {
  name: 'RevenueCard',
  components: {MonthRevenue, RevenueChart},
  props: ['revenue', 'monthRevenue', 'monthRevenueOptions']
}
</script>

<style scoped>

</style>
