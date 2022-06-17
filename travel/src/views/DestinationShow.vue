<!-- DestinationShow.vue -->
<template>
  <div>
    <h2>No. {{ $route.params.id }}</h2>
    <h1>{{ destination.name }}</h1>
    <div>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </div>
</template>

<script>
// 8
import sourceData from "@/data.json";
export default {
  computed: {
    // 5, 6, 7
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    // 9
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
};
</script>
