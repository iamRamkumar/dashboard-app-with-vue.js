<script>
import {Line} from 'vue-chartjs'
export default {
  name: 'MonthRevenue',
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    chartOptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>

<style scoped>

</style>
