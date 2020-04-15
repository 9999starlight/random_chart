<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient: null
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, '#095e52')
    this.gradient.addColorStop(0.5, '#417f84')
    this.gradient.addColorStop(1, '#3f756c')

    this.renderChart({
      labels: this.calculatePeriod,
      datasets: [
        {
          label: `Field ${this.item.name} value`,
          backgroundColor: this.gradient,
          data: this.item.values
        }
      ]
    }
    )
  },

  computed: {
    // label for x axis - every 2 seconds interval
    calculatePeriod () {
      const pulse = []
      for (let i = 0; i < this.item.values.length; i++) {
        pulse.push(`${(i + 1) * 2}`)
      }
      return pulse
    }
  }
}
</script>

<style>
</style>
