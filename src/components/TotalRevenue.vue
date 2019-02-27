<template>
  <div>
    <SegmentCard />
    <br />
    <RevenueCard/>
    <br />
  </div>
</template>

<script>
import RevenueCard from '@/components/RevenueCard'
import SegmentCard from '@/components/SegmentCard'

export default {
  name: 'TotalRevenue',
  components: {
    RevenueCard, SegmentCard
  }
}
</script>

<style scoped>

</style>
