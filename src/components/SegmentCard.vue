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

</style>
