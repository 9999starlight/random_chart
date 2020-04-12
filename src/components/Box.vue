<template>
  <div class="boxContainer">
    <input type="text" id="boxLetter" v-model="startValue" />
    <button v-if="paused" @click="updateValue">Start counting</button>
    <button v-else @click="stopCounting">Pause counting</button>
    <span>{{ startValue.toFixed(2) }}</span>
  </div>
</template>

<script>
export default {
  name: 'Box',
  data () {
    return {
      startValue: 3,
      randomNumber: Number((Math.random() * 1 + 1).toFixed(2)),
      counting: null,
      paused: false
    }
  },

  created () {
    this.updateValue()
  },

  methods: {
    updateValue () {
      this.paused = false
      this.counting = setInterval(() => {
        // console.log(this.randomNumber)
        const sum = this.startValue += this.randomNumber
        return sum
      }, 2000)
    },

    stopCounting () {
      this.paused = true
      clearInterval(this.counting)
    }
  },

  beforeDestroy () {
    this.stopCounting()
  }
}
</script>

<style></style>
