<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import MobileMenu from "@/components/MobileMenu.vue";
</script>

<template>
  <AppHeader />
  <MobileMenu />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>