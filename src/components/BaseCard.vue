<script setup lang="ts">
withDefaults(defineProps<{ hoverable?: boolean }>(), { hoverable: true });
</script>

<template>
  <div
    class="rounded-xl border border-border bg-canvas-raised p-6 transition-all duration-300"
    :class="hoverable ? 'hover:-translate-y-0.5 hover:border-accent-dim' : ''"
  >
    <slot />
  </div>
</template>