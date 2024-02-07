<template>
  <NavComp />
  <RouterView v-slot="{ Component }">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </RouterView>
  <FootNavComp />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavComp from './components/NavComp.vue'
import FootNavComp from './components/FootNavComp.vue'
</script>

<style>
#app {
  color: #2c3e50;
}
.fadeUp-enter-active,
.fadeUp-leave-active {
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.fadeUp-enter,
.fadeUp-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
</style>
