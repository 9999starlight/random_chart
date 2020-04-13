<template>
  <div class="container">
    <h1>This is the statistics page</h1>
    <div class="tableValues" v-for="item in getArrayOfValues" :key="item.index">
      <div class="singleVal">
      <span>{{ item.name }}</span>
      <p v-for="val in item.values" :key="val.index">
        <span>{{ val.toFixed(2) }}</span>
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'statistics',

  created () {
    console.log(this.getArrayOfValues)
  },

  computed: {
    ...mapGetters(['getArrayOfValues'])
  }
}
</script>

<style lang="scss"></style>
