<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container is-flex is-flex-direction-row">
    <RouterLink to="/" class="button is-rounded mx-2">Home</RouterLink>
    <RouterLink to="/need" class="button is-rounded mx-2">Need</RouterLink>
    <RouterLink to="/fun" class="button is-rounded mx-2">Fun</RouterLink>
    <RouterLink to="/saving" class="button is-rounded mx-2">Saving</RouterLink>
  </main>
</template>

<style scoped></style>
