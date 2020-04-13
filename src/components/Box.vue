<template>
  <div class="boxContainer">
    <span>{{ boxItem.name }}</span>
    <span>{{ boxItem.values[boxItem.values.length -1].toFixed(2) }}</span>
<!--     <button
      @click="randomizeValues"
    >Start counting</button> -->
<!--     <button
      v-else
      @click="stopCounting"
    >Pause counting</button> -->
<!--     <span v-if="toggleIncreased">
      <font-awesome-icon :icon="['fa', 'arrow-up']" class="arrowIcon">
        </font-awesome-icon></span>
    <span v-else>---</span> -->
    <span :class="[toggleIncreased ? 'arrow arrowUp' : 'arrow arrowDown']"><font-awesome-icon :icon="['fa', 'arrow-up']" class="arrowIcon">
        </font-awesome-icon></span>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Box',
  /* data () {
    return {
      paused: false
    }
  }, */

  props: {
    boxItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    toggleIncreased () {
      if (this.boxItem.values[this.boxItem.values.length - 1] > this.boxItem.values[this.boxItem.values.length - 2]) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
.arrow {
  transition: 0.8s;
  display: inline-block;
}
.arrowUp {
  color: green;
}

.arrowDown {
  transform: rotateX(180deg);
  color: red;
}
</style>
