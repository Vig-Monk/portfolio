<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useMobileMenu } from "@/composables/useMobileMenu";
import { useCommandPalette } from "@/composables/useCommandPalette";

const { isOpen, toggle } = useMobileMenu();
const { toggle: togglePalette } = useCommandPalette();

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" }
];

const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-all duration-300"
    :class="scrolled
      ? 'border-border bg-canvas/80 backdrop-blur-md shadow-[0_1px_24px_-8px_rgba(0,0,0,0.6)]'
      : 'border-transparent bg-transparent shadow-none'"
  >
    <nav class="container-page flex h-16 items-center justify-between" aria-label="Primary">
      <RouterLink to="/" class="font-mono text-sm text-ink" aria-label="Lu — home">
        ludwig<span class="text-accent-bright">.</span>dev
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
          active-class="text-ink"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <button
          type="button"
          aria-label="Open command palette"
          class="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 font-mono text-xs text-ink-faint transition-colors duration-300 hover:border-accent-dim hover:text-ink-muted"
          @click="togglePalette"
        >
          ⌘K
        </button>

        <RouterLink
          to="/contact"
          class="rounded-lg border border-border px-4 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-dim hover:text-accent-bright hover:shadow-[0_8px_20px_-10px_rgba(13,157,111,0.45)]"
        >
          Contact
        </RouterLink>
      </div>

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