<template>
  <div class="main">
    <!-- <AppHeader /> -->
    <div class="left-side-bar">
      <!-- <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a> -->
    </div>
    <!-- <div class="divider"></div> -->
    <NuxtPage />
    <!-- <div class="footer">AppFooter test</div> -->
    <!-- <AppFooter /> -->
    <div class="right-side-bar">
      <!-- <span v-text="'Billy Herrington'" class="text" /> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/base/_colors.scss";

.main {
  // background: $background;
  width: 100%;
  height: 100vh;
}

.divider {
  // border: 2px solid #2d2827;
  height: 100%;
  width: 2px;
  position: fixed;
  background-color: #2d2827;
  left: 50%;
}

.left-side-bar {
  height: 100%;
  width: 16%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  border-right: 2px solid #2d2827;
  overflow-x: hidden;
  padding-top: 20px;
  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
}

.right-side-bar {
  height: 100%;
  width: 16%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  border-left: 2px solid #2d2827;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 30px;
}

.text {
  color: white;
  font-size: 1.6em;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1);
}
</style>
