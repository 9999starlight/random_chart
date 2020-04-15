<template>
  <div class="container">
    <h1 id="heading">Statistics</h1>
    <div class="chartsWrapper">
      <div
        class="tableValues mgt2 pd1"
        v-for="item in getArrayOfValues"
        :key="item.index"
      >
        <StatisticsChart
          :item="item"
          :width="350"
          :height="350"
        />
        <details class="center">
          <summary>Field listing for {{ item.name }}&nbsp;<font-awesome-icon
              :icon="['fa', 'chevron-down']"
              class="arrowIcon"
            >
            </font-awesome-icon>
          </summary>
          <p>Number of Values: <strong>{{ item.values.length }}</strong></p>
          <div class="valuesDiv flex">
            <p
              class="flex flexCenter"
              v-for="(val, index) in item.values"
              :key="val.index"
            >
              <strong><span>{{ index + 1 }}</span></strong>: {{ val.toFixed(2) }};
            </p>
          </div>
        </details>
      </div>
    </div>
    <a
      href="#heading"
      v-scroll-to="'#heading'"
      class="block hashLink mg2"
    >Back to top &nbsp;<font-awesome-icon
        :icon="['fa', 'hand-point-up']"
        font-size="15px"
      ></font-awesome-icon></a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StatisticsChart from '../components/StatisticsChart'
export default {
  name: 'statistics',

  components: {
    StatisticsChart
  },

  computed: {
    ...mapGetters(['getArrayOfValues'])
  }
}
</script>

<style lang="scss" scoped>
.chartsWrapper {
  @include boxSize($maxWidth: 1500px);
  .tableValues {
    border-bottom: 2px inset gray;
    box-shadow: $shadowBox;
    position: relative;
    @include boxSize($minHeight: 500px);
    background-color: $white;

    details {
      @include boxSize($width: 300px);
      box-shadow: $shadowSmall;
      position: absolute;
      margin-top: 2rem;
      left: 0;
      right: 0;

      .valuesDiv,
      p {
        background-color: rgb(241, 248, 248);
      }

      summary {
        padding: 0.4rem 0;
        background-color: #eeae5a;
        text-shadow: 2px 2px 4px #000;
        @include fonts($color: $white);
        @include boxSize($width: 100%);
        border: none;
        box-shadow: $shadowSmall;
        display: inline-block;
        position: relative;

        .arrowIcon {
          position: absolute;
          right: 1rem;
          top: 0.5rem;
        }
      }

      summary::-webkit-details-marker {
        display: none;
      }

      p {
        padding: 0.5rem;
      }

      .valuesDiv {
        flex-wrap: wrap;
        @include alignment($align: center);
        position: relative;
        z-index: 3;
        p {
          @include boxSize($minWidth: 100px);
        }
      }
    }
  }
}

.hashLink {
  @include fonts($color: #1ecad4, $size: 1.2rem);
}
@media (min-width: 776px) {
  .chartsWrapper {
    .tableValues {
      details {
        @include boxSize($width: 350px);
      }
    }
  }
}

@media (min-width: 1200px) {
  .chartsWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .tableValues {
      @include boxSize($maxWidth: 550px);
      details {
        @include boxSize($maxWidth: 500px);
      }
    }
  }
}
</style>
