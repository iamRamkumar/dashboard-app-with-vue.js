<template>
  <div>
    <SegmentCard :segments="revenue.totalSegments" :bookings="revenue.totalBookings"/>
    <br />
    <RevenueCard :revenue="revenue.totalRevenue" />
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
  },
  props: ['revenue']
}
</script>

<style scoped>

</style>
