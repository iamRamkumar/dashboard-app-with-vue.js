<template>
  <div class="charts">
    <b-row>
      <b-col>
        <h1>Charts</h1>
      </b-col>
      <div class="w-100"></div>
      <b-col>
        <ColumnChart />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ColumnChart from '@/components/ColumnChart'
  export default {
    name: 'Charts',
    components: {ColumnChart}
  }
</script>

<style scoped>

</style>
