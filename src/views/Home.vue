<template>
  <div class="container">
    <h1 class="mgb1">Current Values</h1>
    <div class="boxesWrapper grid">
      <div
        class="boxes"
        v-for="boxItem in getArrayOfValues"
        :key="boxItem.index"
      >
        <Box :boxItem="boxItem" />
      </div>
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

  mounted () {
    this.$store.dispatch('fetchBoxes')
  },

  computed: {
    ...mapActions(['fetchBoxes']),
    ...mapGetters(['getArrayOfValues'])
  }
}
</script>
<style lang="scss" scoped>
.boxesWrapper {
  @include alignment($justifyGrid: center, $align: center);

  .boxes {
    @include boxSize($width: 240px, $height: 100px);
    box-shadow: $shadowSmall;
    margin: 1rem;
    background-color: $white;
  }
}

@media (min-width: 776px) {
  .boxesWrapper {
    grid-template-columns: repeat(3, 1fr);
    .boxes {
      @include boxSize($width: 210px);
    }
  }

  @media (min-width: 1200px) {
    .boxesWrapper {
      grid-template-columns: repeat(3, 1fr);
      .boxes {
        @include boxSize($width: 240px);
      }
    }
  }

  @media (min-width: 1400px) {
    .boxesWrapper {
      grid-template-columns: repeat(4, 1fr);
      .boxes {
        @include boxSize($width: 270px, $height: 130px);
        font-size: 110%;
      }
    }
  }
}
</style>
