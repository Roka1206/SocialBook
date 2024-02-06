<script setup>
import { RouterView } from 'vue-router'
import NavComp from './components/NavComp.vue'
</script>

<template>
  <NavComp />

  <RouterView />
</template>

<style>
#app {
  color: #2c3e50;
}
</style>
