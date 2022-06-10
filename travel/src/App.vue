<!-- App.vue -->
<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/brazil">Brazil</router-link> |
    <router-link to="/hawaii">Hawaii</router-link>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script></script>

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
