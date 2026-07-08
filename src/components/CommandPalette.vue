<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useCommandPalette } from "@/composables/useCommandPalette";

const { isOpen, close, toggle } = useCommandPalette();
const router = useRouter();

const query = ref("");
const activeIndex = ref(0);
const inputEl = ref<HTMLInputElement | null>(null);

interface Command {
  label: string;
  hint?: string;
  action: () => void;
}

const commands: Command[] = [
  { label: "Home", hint: "Go to", action: () => router.push("/") },
  { label: "Projects", hint: "Go to", action: () => router.push("/projects") },
  { label: "About", hint: "Go to", action: () => router.push("/about") },
  { label: "Contact", hint: "Go to", action: () => router.push("/contact") },
  { label: "GitHub", hint: "Open", action: () => window.open("https://github.com/Vig-Monk", "_blank", "noopener,noreferrer") }
];

const filtered = computed(() =>
  query.value.trim()
    ? commands.filter((c) => c.label.toLowerCase().includes(query.value.trim().toLowerCase()))
    : commands
);

function runActive() {
  const cmd = filtered.value[activeIndex.value];
  if (!cmd) return;
  cmd.action();
  close();
}

function onGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    toggle();
  }
}

function onPaletteKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    close();
    return;
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = Math.min(activeIndex.value + 1, filtered.value.length - 1);
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = Math.max(activeIndex.value - 1, 0);
  }
  if (e.key === "Enter") {
    e.preventDefault();
    runActive();
  }
}

watch(isOpen, async (open) => {
  if (open) {
    query.value = "";
    activeIndex.value = 0;
    await nextTick();
    inputEl.value?.focus();
  }
});

watch(query, () => {
  activeIndex.value = 0;
});

onMounted(() => window.addEventListener("keydown", onGlobalKeydown));
onUnmounted(() => window.removeEventListener("keydown", onGlobalKeydown));
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[60] flex items-start justify-center bg-canvas-inset/70 pt-[15vh]"
      @click="close"
    >
      <div
        class="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-canvas-raised shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        @click.stop
        @keydown="onPaletteKeydown"
      >
        <div class="flex items-center gap-3 border-b border-border px-4 py-3">
          <span class="font-mono text-ink-faint">⌘K</span>
          <input
            ref="inputEl"
            v-model="query"
            type="text"
            placeholder="Where to?"
            class="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
        </div>
        <ul class="max-h-72 overflow-y-auto p-2">
          <li v-if="filtered.length === 0" class="px-3 py-6 text-center text-sm text-ink-muted">
            No matches
          </li>
          <li
            v-for="(cmd, i) in filtered"
            :key="cmd.label"
            class="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors"
            :class="i === activeIndex ? 'bg-accent/10 text-ink' : 'text-ink-muted hover:bg-canvas-inset'"
            @mouseenter="activeIndex = i"
            @click="cmd.action(); close();"
          >
            <span>{{ cmd.label }}</span>
            <span v-if="cmd.hint" class="font-mono text-xs text-ink-faint">{{ cmd.hint }}</span>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>