<template>
  <div>
    <b-row>
      <div class="w-100"></div>
      <b-col>
        <vue-good-table :columns="columns" :rows="rows" :group-options="{ enabled: true, headerPosition: 'bottom',}" theme="black-rhino">
          <div slot="emptystate">
            Empty Rows
          </div>
        </vue-good-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { sumBy } from 'lodash'

export default {
  name: 'ClientTable',
  components: {VueGoodTable},
  data: function () {
    return {
      columns: [
        {
          label: 'Client',
          field: 'client',
          headerField: this.clientHeader
        },
        {
          label: 'Segments',
          field: 'segments',
          headerField: this.sumSegments,
          type: 'number'
        },
        {
          label: 'Bookings',
          field: 'bookings',
          headerField: this.sumBookings,
          type: 'number'
        },
        {
          label: 'Revenue',
          field: 'revenue',
          headerField: this.sumRevenue,
          type: 'number'
        }
      ],
      rows: [
        {
          name: 'Clients',
          revenue: '',
          children: [
            { client: 'Lion Air', segments: 10000, bookings: 10000, revenue: 10000 },
            { client: 'Malindo Air', segments: 2000, bookings: 2000, revenue: 2000 },
            { client: 'Thai Lion Air', segments: 3000, bookings: 3000, revenue: 3000 },
            { client: 'Batik Air', segments: 1000, bookings: 1000, revenue: 1000 },
            { client: 'Bangkok Air', segments: 2000, bookings: 2000, revenue: 2000 }
          ]
        }
      ]
    }
  },
  methods: {
    sumRevenue (rowObj) {
      return sumBy(rowObj.children, 'revenue')
    },
    sumBookings (rowObj) {
      return sumBy(rowObj.children, 'bookings')
    },
    sumSegments (rowObj) {
      return sumBy(rowObj.children, 'segments')
    },
    clientHeader (rowObj) {
      return 'Total'
    }
  }
}
</script>

<style scoped>
.vgt-row-header {
  color: #000000;
}
</style>
