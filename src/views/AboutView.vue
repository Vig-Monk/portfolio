<script setup lang="ts">
import { onMounted } from "vue";
import BaseCard from "@/components/BaseCard.vue";

onMounted(() => {
  document.title = "About — Lu";
});

const principles = [
  { title: "Correctness before speed", body: "Constraints, types, and migrations come first. Performance work happens once the schema can be trusted." },
  { title: "No ORM, on purpose", body: "Raw pg and hand-written SQL keep query behavior visible and debuggable — no hidden N+1s from an abstraction layer." },
  { title: "Multi-tenancy from day one", body: "Branded ID types (OrgId, UserId) make tenant isolation a compile-time concern, not a runtime hope." }
];

const architectureTopics = [
  "JWT auth with refresh token rotation",
  "Role-based access control (RBAC)",
  "Multi-tenant schema isolation",
  "PostgreSQL indexing strategy",
  "Caching and queue processing patterns"
];
</script>

<template>
  <section class="container-page py-20">
    <p class="eyebrow mb-3">About</p>
    <h1 class="mb-8 text-display-lg font-display font-semibold text-ink">My Story</h1>

    <div class="markdown-body mb-16 max-w-2xl">
      <p>
        I'm a self-taught fullstack developer based in Nairobi, building toward
        freelance work for East African SMEs. My background is in forex and
        futures trading, which is where the technical-analysis habit of mind
        came from — reading systems for risk before reading them for features.
      </p>
      <p>
        I develop entirely on Android, using Termux and Acode. That constraint
        has shaped how I build: lean toolchains, explicit code over heavy
        abstractions, and a strong bias toward understanding exactly what's
        running rather than trusting a framework to hide it from me.
      </p>
      <p>
        Before this, I worked as a market porter at Wakulima Market in Nairobi —
        which is part of why East African commerce and the M-Pesa / Daraja API
        ecosystem are a focus rather than an afterthought. I've seen the target
        market from the inside.
      </p>
    </div>

    <h2 class="mb-6 text-2xl font-semibold text-ink">Engineering Principles</h2>
    <div class="mb-16 grid gap-5 sm:grid-cols-3">
      <BaseCard v-for="item in principles" :key="item.title" :hoverable="false">
        <h3 class="mb-2 font-semibold text-ink">{{ item.title }}</h3>
        <p class="text-sm text-ink-muted">{{ item.body }}</p>
      </BaseCard>
    </div>

    <h2 class="mb-6 text-2xl font-semibold text-ink">Systems I Design For</h2>
    <ul class="mb-16 grid gap-3 sm:grid-cols-2">
      <li
        v-for="topic in architectureTopics"
        :key="topic"
        class="rounded-lg border border-border bg-canvas-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ topic }}
      </li>
    </ul>

    <h2 class="mb-6 text-2xl font-semibold text-ink">Stack</h2>
    <p class="max-w-2xl text-ink-muted">
      TypeScript, Node.js, Express, PostgreSQL (raw <code class="font-mono text-accent-bright">pg</code>,
      no ORM, by design), Vue 3, Neon, deployed to Render and Vercel.
    </p>
  </section>
</template>