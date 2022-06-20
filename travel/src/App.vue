<!-- App.vue -->
<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style>
.nav {
  max-width: 600px;
  background-color: thistle;
}
.nav #logo {
  text-decoration-style: dotted;
  font-size: 1.25rem;
}
.container {
  max-width: 600px;
  background-color: bisque;
}
</style>
