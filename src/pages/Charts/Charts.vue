<template>
  <div class="charts">
    <br/>
    <b-row>
      <b-col>
        <ComboChart />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ComboChart from '@/components/ComboChart'

export default {
  name: 'Charts',
  components: {ComboChart}
}
</script>

<style scoped>

</style>
