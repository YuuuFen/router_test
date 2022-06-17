<!-- Home.vue -->
<template>
  <div class="home">
    <h1>All Destinations</h1>
  </div>
  <div class="destinations">
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id } }"
    >
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </router-link>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style>
img {
  max-width: 150px;
}
.destinations {
  max-width: 600px;
  display: flex;
}
</style>
