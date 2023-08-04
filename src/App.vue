<script setup>
import { RouterView } from 'vue-router'
import PageSelectorComponent from '@/components/PageSelectorComponent.vue'
import HeroBannerComponent from '@/components/HeroBannerComponent.vue'
</script>

<template>
  <header>
    <HeroBannerComponent />
    <PageSelectorComponent />
  </header>

  <RouterView />
</template>
