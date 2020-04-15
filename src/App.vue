<template>
  <div
    id="app"
    class="flex"
  >
    <app-header></app-header>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Header from './components/Header'

export default {
  name: 'app',

  components: {
    'app-header': Header
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins&display=swap");
@import "./styles/global.scss";
#app {
  box-sizing: border-box;
  @include boxSize($width: 100%, $minHeight: 100vh);
  @include alignment($direction: column, $align: center);
  @include fonts($color: $graphite);
  font-family: "Lato", Arial, sans-serif;
  @include background(radial-gradient(ellipse at center,rgba(103, 129, 133, 0.8) 0%, rgba(78, 77, 77, 0.9) 100%), url('./assets/background_blue.jpg'), $backConfig);
  background-attachment: fixed;

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
