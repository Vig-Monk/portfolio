<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <span class="inline-flex items-center rounded-md border border-border bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted">
    {{ label }}
  </span>
</template>