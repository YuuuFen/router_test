<!-- App.vue -->
<template>
  <TheNavigation />
  <div class="container">
    <router-view></router-view>
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
.container {
  max-width: 600px;
  background-color: bisque;
}
</style>
