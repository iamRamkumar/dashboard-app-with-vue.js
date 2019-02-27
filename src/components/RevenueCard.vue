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
