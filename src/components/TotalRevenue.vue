<template>
  <div>
    <SegmentCard :segments="revenue.totalSegments" :bookings="revenue.totalBookings"/>
    <br />
    <RevenueCard :revenue="revenue.totalRevenue" :monthRevenue="monthRevenue" :monthRevenueOptions="monthRevenueOptions"/>
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
  props: ['revenue', 'monthRevenue', 'monthRevenueOptions']
}
</script>

<style scoped>

</style>
