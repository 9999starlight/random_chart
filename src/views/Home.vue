<template>
  <div class="container">
    <h1 class="mgb1">Current Values</h1>
    <div class="boxesWrapper flex flexCenter">
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
    ...mapGetters(['getArrayOfValues'])
  },

  methods: {
    ...mapActions(['fetchBoxes'])
  }
}
</script>
<style lang="scss" scoped>
.boxesWrapper {
  @include alignment($direction: column);
  @include boxSize($maxWidth: 1500px);
  .boxes {
    @include boxSize($width: 240px, $height: 100px);
    box-shadow: $shadowSmall;
    margin: 1rem;
    background-color: $white;
  }
}

@media (min-width: 776px) {
  .boxesWrapper {
    @include alignment($direction: row);
    flex-wrap: wrap;
    .boxes {
      @include boxSize($width: 210px);
    }
  }

  @media (min-width: 1200px) {
    .boxesWrapper {
      .boxes {
        @include boxSize($width: 240px);
      }
    }
  }

  @media (min-width: 1400px) {
    .boxesWrapper {
      .boxes {
        @include boxSize($width: 270px, $height: 130px);
        font-size: 110%;
      }
    }
  }
}
</style>
