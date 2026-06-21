<script setup lang="ts">
import { useMobileMenu } from "@/composables/useMobileMenu";

const { isOpen, close } = useMobileMenu();

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 bg-canvas-inset/80 md:hidden" @click="close" />

  <nav
    v-if="isOpen"
    class="fixed right-0 top-0 z-50 h-full w-[78%] max-w-xs border-l border-border bg-canvas-raised p-6 md:hidden"
    aria-label="Mobile"
  >
    <button type="button" aria-label="Close menu" class="mb-8 block text-ink-muted" @click="close">
      ✕
    </button>
    <ul class="flex flex-col gap-1">
      <li v-for="item in navItems" :key="item.to">
        <RouterLink
          :to="item.to"
          class="block rounded-lg px-3 py-3 text-base text-ink hover:bg-canvas-inset hover:text-accent-bright"
          @click="close"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>