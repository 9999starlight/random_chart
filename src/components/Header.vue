<template>
  <header class="flex">
    <nav class="flex">
      <ul class="flex">
        <router-link
          :to="{ name: 'home' }"
          tag="li"
          class="flex"
          active-class="active"
          exact
        ><a>Home</a></router-link>
        <router-link
          :to="{ name: 'statistics' }"
          tag="li"
          active-class="active"
          class="flex"
        ><a>Statistics</a></router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  @include boxSize($width: 100%, $height: 7vh);
  @include alignment($justify: flex-end);
  padding: 0 0.7rem;
  top: 0;
  box-shadow: $shadowSmall;
  background-color: #566065;
  z-index: 5;

  nav {
    @include boxSize($height: 90%);
    li {
      &.active {
        border-bottom: 2px solid white;
      }
    }
    li a {
      padding: 0.8rem;
      @include fonts($color: $white);
      &:hover {
        color: rgba(8, 88, 71, 0.452);
      }
    }
  }
}

@media (min-width: 776px) {
  header {
    li a {
      @include fonts($color: $graphite, $size: 1.2rem);
    }
  }
}
</style>
