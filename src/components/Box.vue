<template>
  <div class="boxContainer">
    <!-- <input type="text" id="boxLetter" v-model="startValue" /> -->
    <span>{{ startValue.toFixed(2) }}</span>
    <button
      v-if="paused"
      @click="updateValue"
    >Start counting</button>
    <button
      v-else
      @click="stopCounting"
    >Pause counting</button>
  </div>
</template>

<script>
export default {
  name: 'Box',
  data () {
    return {
      startValue: 3,
      // randomNumber: Number((Math.random() * 1 + 1).toFixed(2)),
      counting: null,
      countingAgain: null,
      paused: false
    }
  },

  mounted () {
    this.updateValue()
  },

  methods: {
  /*     updateValue () {
      this.paused = false
      this.counting = setInterval(() => {
        // console.log(this.randomNumber)
        const sum = this.startValue += this.randomNumber
        return sum
      }, 2000)
    }, */

    updateValue () {
      (this.displayNumbers = () => {
        this.paused = false
        this.counting = setTimeout(() => {
          let random = Number((Math.random() * 1 + 1).toFixed(2))
          // choose positive or negative
          const plusMinus = Math.random() < 0.5 ? -1 : 1
          random = random * plusMinus
          // console.log(random)
          const sum = this.startValue += random
          return sum
        }, 5000)
        this.countingAgain = setTimeout(this.displayNumbers, 5000)
      })()
    },

    stopCounting () {
      this.paused = true
      clearTimeout(this.counting)
      clearTimeout(this.countingAgain)
    }
  },

  beforeDestroy () {
    this.stopCounting()
  }
}
</script>

<style></style>
