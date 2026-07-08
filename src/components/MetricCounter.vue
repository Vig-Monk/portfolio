<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{ target: number; suffix?: string; duration?: number }>();

const display = ref(0);
const el = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
let hasAnimated = false;

function animate() {
  const duration = props.duration ?? 1200;
  const start = performance.now();

  function tick(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = Math.round(props.target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animate();
      }
    },
    { threshold: 0.4 }
  );
  if (el.value) observer.observe(el.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>