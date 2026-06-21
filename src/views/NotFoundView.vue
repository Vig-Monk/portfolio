<script setup lang="ts">
import { onMounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";

onMounted(() => {
  document.title = "Page Not Found — Lu";
});
</script>

<template>
  <section class="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
    <p class="eyebrow mb-3">404</p>
    <h1 class="mb-4 text-2xl font-semibold text-ink">Page not found</h1>
    <p class="mb-8 text-ink-muted">That route doesn't exist.</p>
    <BaseButton to="/">Back Home</BaseButton>
  </section>
</template>