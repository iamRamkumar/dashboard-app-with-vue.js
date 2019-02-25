<template>
  <div class="charts">
    <b-row>
      <b-col>
        <h1>Charts</h1>
      </b-col>
      <div class="w-100"></div>
    </b-row>
    <b-row>
      <b-col>
        <ColumnChart />
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <LineChart />
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <AreaChart />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ColumnChart from '@/components/ColumnChart';
  import LineChart from '@/components/LineChart';
  import AreaChart from '@/components/AreaChart';
  export default {
    name: 'Charts',
    components: {ColumnChart,LineChart,AreaChart}
  }
</script>

<style scoped>

</style>
