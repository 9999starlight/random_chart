<template>
  <div class="boxContainer">
    <div class="boxHeader flex flexCenter">{{ boxItem.name }}</div>
    <div class="mainContent flex flexCenter">
      <p :class="[!plusMinus ? 'valueDown' : '']">
        {{ boxItem.values[boxItem.values.length - 1].toFixed(2) }} &nbsp;<span :class="[toggleIncreased ? 'arrow valueUp' : 'arrow valueDown arrowDown']">
          <font-awesome-icon
            :icon="['fa', 'arrow-up']"
            class="arrowIcon"
          >
          </font-awesome-icon>
        </span>
      </p>
      <div class="buttons">
        <button
          v-if="paused"
          @click="updateValue"
          class="btn btnPlay block center"
          title="resume updating"
        >Resume&nbsp;
          <font-awesome-icon
            :icon="['fa', 'play']"
            class="btnIcon resumeIcon"
          >
          </font-awesome-icon>
        </button>
        <button
          v-else
          @click="stopCounting"
          class="btn btnPause block center"
          title="pause updating"
        >Pause&nbsp;
          <font-awesome-icon
            :icon="['fa', 'pause']"
            class="btnIcon pauseIcon"
          >
          </font-awesome-icon></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Box',

  data () {
    return {
      paused: false,
      counting: null
    }
  },

  props: {
    boxItem: {
      type: Object,
      required: true
    }
  },

  mounted () {
    this.updateValue()
  },

  computed: {
    ...mapActions(['randomizeValues']),

    toggleIncreased () {
      if (
        this.boxItem.values[this.boxItem.values.length - 1] >
        this.boxItem.values[this.boxItem.values.length - 2]
      ) {
        return true
      } else {
        return false
      }
    },

    plusMinus () {
      if (
        this.boxItem.values[this.boxItem.values.length - 1] > 0
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    updateValue () {
      this.paused = false
      this.counting = setInterval(() => {
        this.$store.dispatch('randomizeValues', this.boxItem)
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

<style lang="scss" scoped>
.boxContainer {
  @include boxSize($width: 100%, $height: 100%);
  .boxHeader {
    @include boxSize($width: 100%, $height: 30%);
    @include alignment($textAlign: center);
    @include fonts($color: $white, $weight: 900);
    background: linear-gradient(229deg, #095e52, #417f84, #5eb5a7);
    text-shadow: 2px 2px 4px #000;
  }
  .mainContent {
    @include boxSize($width: 100%, $height: 70%);
    @include alignment($justify: space-evenly);
    .buttons,
    p {
      @include boxSize($width: 50%);
    }
    p {
      text-align: center;
      font-weight: 900;
      &.valueDown {
        color: red;
      }
      .arrow {
        transition: 0.4s;
        display: inline-block;
      }
      .valueUp {
        color: green;
      }
      .arrowDown {
        transform: rotateX(180deg);
      }
      .valueDown {
        color: red;
      }
    }

    .btn {
      @include boxSize($width: 70px, $height: 25px);
      border: none;
      border-radius: 3px;
      box-shadow: $shadowSmall;
      color: $white;
      font-weight: 500;

      &.btnPause {
        background-color: #ebc877;
      }

      &.btnPlay {
        background-color: #6a93cb;
        background-image: linear-gradient(to top, #7e7676 0%, #c8c2bd 100%);
      }
      .btnIcon {
        @include fonts($weight: 700, $size: 0.7rem, $color: $white);
      }
    }
  }
}
</style>
