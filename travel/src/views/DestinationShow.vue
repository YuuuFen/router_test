<!-- DestinationShow.vue -->
<template>
  <div v-if="destination">
    <h2>No. {{ $route.params.id }}</h2>
    <h1>{{ destination.name }}</h1>
    <div>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>
