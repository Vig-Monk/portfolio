<script setup lang="ts">
withDefaults(defineProps<{ hoverable?: boolean }>(), { hoverable: true });
</script>

<template>
  <div
    class="relative overflow-hidden rounded-xl border border-border bg-canvas-raised p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] transition-all duration-300"
    :class="hoverable
      ? 'hover:-translate-y-1.5 hover:border-accent-dim hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.04)]'
      : ''"
  >
    <slot />
  </div>
</template>