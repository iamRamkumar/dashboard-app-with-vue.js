<template>
  <div>
    <br />
    <b-row>
      <b-col md="6">
        <SegmentCard/>
      </b-col>
      <b-col md="6">
        <RevenueCard/>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import RevenueCard from '@/components/RevenueCard'
import SegmentCard from '@/components/SegmentCard'
export default {
  name: 'Revenue',
  components: {RevenueCard, SegmentCard}
}
</script>

<style scoped>

</style>
