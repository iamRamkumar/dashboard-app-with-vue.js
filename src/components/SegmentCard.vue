<template>
  <b-card bg-variant="primary" border-variant="primary" text-variant="white" class="segment-card" no-body>
    <b-card-body>
      <font-awesome-icon :icon="planeDepart" fixed-width size="6x" pull="right" transform="shrink-6" :style="{ color: '#81A2B8', opacity: 0.6 }"></font-awesome-icon>
      <b-row align-v="start">
        <div class="mx-4">
          <b-card-title>Some Numbers</b-card-title>
        </div>
        <div class="w-100"></div>
        <div class="mx-4">
          <b-card-text>Total Segment</b-card-text>
        </div>
      </b-row>
      <br />
      <b-row align-v="start">
        <div class="mx-4">
          <b-card-title>Some Numbers</b-card-title>
        </div>
        <div class="w-100"></div>
        <div class="mx-4">
          <b-card-text>Total Bookings</b-card-text>
        </div>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'SegmentCard',
  components: {FontAwesomeIcon},
  data: function () {
    return {
      planeDepart: faPlaneDeparture
    }
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
</style>
