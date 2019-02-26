<template>
  <b-card no-body bg-variant="primary" border-variant="warning" text-variant="black" class="revenue-card">
    <b-card-body>
      <b-row>
        <b-col cols="12" sm="4" >
          <b-col>
            <font-awesome-icon :icon="bank" fixed-width size="6x" transform="shrink-6" :style="{ color: '#81A2B8', opacity: 0.6 }"></font-awesome-icon>
          </b-col>
          <b-card-title>
            <font-awesome-icon :icon="dollar"></font-awesome-icon> some numbers
          </b-card-title>
          <div class="w-100"></div>
          <b-card-title>
            Total Revenue
          </b-card-title>
        </b-col>
        <b-col cols="12" sm="8">
          <RevenueChart  />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDollarSign, faUniversity } from '@fortawesome/free-solid-svg-icons'
import RevenueChart from '@/components/RevenueChart'
export default {
  name: 'RevenueCard',
  components: {FontAwesomeIcon, RevenueChart},
  data: function () {
    return {
      dollar: faDollarSign,
      bank: faUniversity
    }
  }
}
</script>

<style scoped>

</style>
