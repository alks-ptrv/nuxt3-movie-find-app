<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
<script setup>
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
</script>