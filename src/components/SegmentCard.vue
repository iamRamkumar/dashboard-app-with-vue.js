<template>
  <div class="box seg_booking_bg">
    <div class="total">
      <h3>{{segments}}</h3>
      <h5>Total Segment</h5>
    </div>
    <div class="total">
      <h3>{{bookings}}</h3>
      <h5>Total Bookings</h5>
    </div>
  </div>
  <!--<b-card bg-variant="primary" border-variant="primary" text-variant="white" class="segment-card" no-body>-->
    <!--<b-card-body>-->
      <!--<font-awesome-icon :icon="planeDepart" fixed-width size="6x" pull="right" transform="shrink-6" :style="{ color: '#81A2B8', opacity: 0.6 }"></font-awesome-icon>-->
      <!--<b-row align-v="start">-->
        <!--<div class="mx-4">-->
          <!--<b-card-title>{{segments}}</b-card-title>-->
        <!--</div>-->
        <!--<div class="w-100"></div>-->
        <!--<div class="mx-4">-->
          <!--<b-card-text>Total Segment</b-card-text>-->
        <!--</div>-->
      <!--</b-row>-->
      <!--<br />-->
      <!--<b-row align-v="start">-->
        <!--<div class="mx-4">-->
          <!--<b-card-title>{{bookings}}</b-card-title>-->
        <!--</div>-->
        <!--<div class="w-100"></div>-->
        <!--<div class="mx-4">-->
          <!--<b-card-text>Total Bookings</b-card-text>-->
        <!--</div>-->
      <!--</b-row>-->
    <!--</b-card-body>-->
  <!--</b-card>-->
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'SegmentCard',
  components: {FontAwesomeIcon},
  props: ['segments', 'bookings'],
  data: function () {
    return {
      planeDepart: faPlaneDeparture
    }
  }
}
</script>

<style scoped>

</style>
