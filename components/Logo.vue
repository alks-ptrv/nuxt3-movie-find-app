<template>
  <nuxt-link :to="to">
    <img
      src="~/assets/img/logo/MOVIE_FIND-logos_transparent.png"
      alt=""
      class="logo"
    />
  </nuxt-link>
</template>
<script setup>
defineProps({
  to: String,
});
</script>

<style lang="scss" scoped>
.logo {
  display: table;
  margin: 0 auto;
  height: 14vh;
  z-index: 10;
  position: relative;
  padding: 2vh 0 6vh;
}
</style>
