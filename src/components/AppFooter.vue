<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border">
    <div class="container-page flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
      <p class="font-mono text-sm text-ink-muted">&copy; {{ year }} Lu. Built with Vue 3 &amp; TypeScript.</p>
      <div class="flex gap-6 text-sm text-ink-muted">
        <a href="https://github.com/Vig-Monk" target="_blank" rel="noopener noreferrer" class="hover:text-ink">GitHub</a>
        <RouterLink to="/contact" class="hover:text-ink">Contact</RouterLink>
      </div>
    </div>
  </footer>
</template>