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

  .segment-card{
    background: #5C258D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .segment-card-body{
    /*background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("../assets/aeroplane.svg");*/
    background: url("../assets/aeroplane.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-blend-mode: hue;
    background-size: 27%;
    /*opacity:0.4;*/
  }

  .revenue-card-body{
    /*background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("../assets/aeroplane.svg");*/
    background: url("../assets/money-bag.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-blend-mode: hue;
    background-size: 27%;
    /*opacity:0.4;*/
  }

  .revenue-card {
    background: #C02425;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

</style>
