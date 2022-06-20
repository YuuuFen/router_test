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
  data() {
    return {
      destination: null,
    };
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
  },
  methods: {
    async initData() {
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
      );
      this.destination = await response.json();
    },
  },
  async created() {
    this.initData();
    // this.$watch(() => this.$route.params, this.initData);
  },
};
</script>
