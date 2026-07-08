<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Dev Notes — Lu";
});

const architectureNotes = [
  "Soko's tenant isolation is enforced with branded TypeScript types (OrgId, UserId), not just naming convention — a function expecting one can't silently accept the other.",
  "No ORM anywhere in the stack. Raw pg with hand-written SQL keeps every query's real behavior visible instead of hidden behind an abstraction.",
  "Auth uses refresh token rotation with reuse detection — a stolen refresh token that gets reused after rotation immediately signals a compromise."
];

const favoriteTools = [
  "Termux + Acode — the entire dev environment lives on a phone, on purpose.",
  "Raw pg over any ORM, including Prisma (which doesn't run in this environment anyway).",
  "TypeScript strict mode with no implicit any, everywhere."
];

const currentlyLearning = [
  "DSA, scoped to the ~20% of concepts that cover 80% of real-world use cases, anchored to Soko, Joy Agency, and Taskr as reference points instead of abstract problems.",
  "Distributed systems fundamentals, as Soko's multi-tenant architecture grows.",
  "OOP patterns in TypeScript, applied back into the Soko codebase as they land."
];

const experiments = [
  "Reading codebases the way multi-timeframe trading reads a chart — zoom out for architecture, zoom in for the one function that's about to break."
];
</script>

<template>
  <section class="container-page py-20">
    <p class="eyebrow mb-3">You found it</p>
    <h1 class="mb-4 text-display-lg font-display font-semibold text-ink">Dev Notes</h1>
    <p class="mb-16 max-w-xl text-ink-muted">
      A page that isn't linked anywhere. If you got here with
      ↑ ↑ ↓ ↓ ← → ← → B A, you're exactly the kind of person this page is for.
    </p>

    <h2 class="mb-4 text-xl font-semibold text-ink">Architecture Notes</h2>
    <ul class="mb-12 space-y-3">
      <li
        v-for="note in architectureNotes"
        :key="note"
        class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ note }}
      </li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-ink">Favorite Tools</h2>
    <ul class="mb-12 space-y-3">
      <li
        v-for="tool in favoriteTools"
        :key="tool"
        class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ tool }}
      </li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-ink">Currently Learning</h2>
    <ul class="mb-12 space-y-3">
      <li
        v-for="item in currentlyLearning"
        :key="item"
        class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ item }}
      </li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-ink">Fun Engineering Experiments</h2>
    <ul class="space-y-3">
      <li
        v-for="item in experiments"
        :key="item"
        class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>