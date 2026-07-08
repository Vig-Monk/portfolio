<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const progress = ref(0);
let ticking = false;

function update() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}

onMounted(() => {
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});
</script>

<template>
  <div class="fixed left-0 top-0 z-50 h-0.5 w-full">
    <div class="h-full bg-accent-bright transition-[width] duration-150 ease-out" :style="{ width: progress + '%' }" />
  </div>
</template>