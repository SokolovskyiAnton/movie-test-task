<template>
  <div class="h-screen">
    <HeaderComponent />
    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'
</script>