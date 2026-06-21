<script setup lang="ts">
import { useMobileMenu } from "@/composables/useMobileMenu";

const { isOpen, toggle } = useMobileMenu();

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" }
];
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur-md">
    <nav class="container-page flex h-16 items-center justify-between" aria-label="Primary">
      <RouterLink to="/" class="font-mono text-sm text-ink" aria-label="Lu — home">
        lu<span class="text-accent-bright">.</span>dev
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm text-ink-muted transition-colors hover:text-ink"
          active-class="text-ink"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <RouterLink
        to="/contact"
        class="hidden rounded-lg border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-accent-dim hover:text-accent-bright md:block"
      >
        Contact
      </RouterLink>

      <button
        type="button"
        aria-label="Open menu"
        :aria-pressed="isOpen"
        class="flex h-10 w-10 items-center justify-center text-ink-muted md:hidden"
        @click="toggle"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round" />
        </svg>
      </button>
    </nav>
  </header>
</template>