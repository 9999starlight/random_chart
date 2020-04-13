<template>
  <div class="container">
    <h1>this is a home page</h1>
    <div
      class="boxes"
      v-for="boxItem in getArrayOfValues"
      :key="boxItem.index"
    >
        <Box :boxItem="boxItem"/>
    </div>
  </div>
</template>

<script>
import Box from '../components/Box'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    Box
  },

  data () {
    return {
      counting: null
    }
  },
  mounted () {
    this.$store.dispatch('fetchBoxes')
    // console.log(this.getArrayOfValues)
    this.updateValue()
  },

  computed: {
    ...mapActions(['fetchBoxes', 'randomizeValues']),
    ...mapGetters(['getArrayOfValues'])
  },
  methods: {
    updateValue () {
      this.counting = setInterval(() => {
        this.$store.dispatch('randomizeValues')
        console.log(this.getArrayOfValues)
      }, 10000)
    },

    stopCounting () {
      clearInterval(this.counting)
    }
  },

  beforeDestroy () {
    this.stopCounting()
  },

  beforeRouteLeave (to, from, next) {
    this.stopCounting()
    next()
  }
}
</script>
<style lang="scss">
.boxes {
  @include boxSize($width: 200px);
}
</style>
