<script setup lang="ts">
import { onMounted } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import MetricCounter from "@/components/MetricCounter.vue";

onMounted(() => {
  document.title = "About — Lu";
});

const metrics = [
  { label: "Projects Shipped", value: 3, suffix: "" }, // TODO: count real deployed/production-ready projects (Taskr, Joy Agency, Soko once live, etc.)
  { label: "Auth Systems Built", value: 4, suffix: "" }, // TODO: JWT/refresh-rotation implementations across projects
  { label: "Databases Designed", value: 4, suffix: "" }, // TODO: distinct schemas you've designed from scratch
  { label: "Years Writing Code", value: 1, suffix: "" } // TODO: honest count, doesn't need to be impressive to be credible
];

const journey = [
  {
    period: "Getting started",
    title: "Started programming, self-taught, on Android",
    body: "Termux and Acode from day one — a constraint that shaped every toolchain decision since: lean setups, no native binaries, explicit code over hidden abstractions."
  },
  {
    period: "First full build",
    title: "Built Taskr",
    body: "A MEVN-stack task manager, taken through a full audit and made production-ready — the first project that forced real decisions about structure, not just following a tutorial."
  },
  {
    period: "First real client",
    title: "Shipped Joy Agency",
    body: "A domestic staffing platform (Vue 3, Express, MongoDB, Cloudinary) built and deployed for an actual Nairobi client — resolving real production issues, not toy-project ones: CORS, SPA rewrites, upload failures."
  },
  {
    period: "Now",
    title: "Designing Soko",
    body: "A multi-tenant SaaS platform for East African market traders, TypeScript and raw PostgreSQL by design — no ORM, branded ID types, explicit transactions. Built from the inside: I worked as a porter at the market it's designed for."
  },
  {
    period: "Ongoing",
    title: "Deepening the fundamentals",
    body: "Structured DSA study and distributed-systems concepts, anchored to Soko, Joy Agency, and Taskr as real reference points rather than abstract exercises."
  }
];

const values = [
  {
    title: "Correctness first",
    body: "Constraints, types, and migrations come before performance work. Speed optimizations happen once the schema can be trusted."
  },
  {
    title: "Security",
    body: "Refresh token rotation with reuse detection, not just access tokens with long lifespans — auth that assumes tokens will eventually leak, and plans for it."
  },
  {
    title: "Scalability",
    body: "Indexing and schema decisions get made upfront, before the data volume that would expose a bad one — not retrofitted after a slow query shows up in production."
  },
  {
    title: "Maintainability",
    body: "Snake_case types that mirror raw pg output, explicit transactions, no implicit any — so six months from now, the code still reads like what it actually does."
  },
  {
    title: "No ORM, on purpose",
    body: "Raw pg and hand-written SQL keep query behavior visible and debuggable — no hidden N+1s from an abstraction layer deciding what to run."
  },
  {
    title: "Multi-tenancy from day one",
    body: "Branded ID types (OrgId, UserId) make tenant isolation a compile-time concern, not a runtime hope."
  }
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

    <div class="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
      <div
        v-for="(m, i) in metrics"
        :key="m.label"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
        class="text-center"
      >
        <p class="text-3xl font-display font-semibold text-accent-bright sm:text-4xl">
          <MetricCounter :target="m.value" :suffix="m.suffix" />
        </p>
        <p class="mt-1 text-xs text-ink-muted">{{ m.label }}</p>
      </div>
    </div>

    <h2 class="mb-8 text-2xl font-semibold text-ink">Engineering Journey</h2>
    <div class="relative mb-16 pl-10">
      <div class="absolute bottom-1 left-[7px] top-1 w-px bg-border" />
      <ol class="space-y-10">
        <li
          v-for="(step, i) in journey"
          :key="step.title"
          v-motion
          :initial="{ opacity: 0, x: -16 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: i * 150 } }"
          class="relative"
        >
          <span class="absolute -left-10 top-0.5 h-4 w-4 rounded-full border-2 border-accent-bright bg-canvas" />
          <p class="eyebrow mb-1">{{ step.period }}</p>
          <h3 class="mb-1 font-semibold text-ink">{{ step.title }}</h3>
          <p class="max-w-xl text-sm text-ink-muted">{{ step.body }}</p>
        </li>
      </ol>
    </div>

    <h2 class="mb-6 text-2xl font-semibold text-ink">Engineering Values</h2>
    <div class="mb-16 grid gap-5 sm:grid-cols-3">
      <BaseCard
        v-for="(item, i) in values"
        :key="item.title"
        :hoverable="false"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }"
      >
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