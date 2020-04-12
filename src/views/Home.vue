<template>
  <div class="container">
    <h1>this is a home page</h1>
    <div
      class="boxes"
      v-for="box in boxArray"
      :key="box.index"
    >
      <span>{{ box }}</span>
      <Box />
    </div>
  </div>
</template>

<script>
import Box from '../components/Box'
export default {
  name: 'home',
  components: {
    Box
  },

  data () {
    return {
      boxArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }
  },

  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.boxes {
  @include boxSize($width: 200px);
}
</style>
