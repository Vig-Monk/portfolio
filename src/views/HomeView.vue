<script setup lang="ts">
import { onMounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import ProjectGrid from "@/components/ProjectGrid.vue";
import { featuredProjects } from "@/content/projects";

onMounted(() => {
  document.title = "Lu — Backend & Systems Engineer";
});

const whatIDo = [
  { title: "SaaS Development", body: "End-to-end multi-tenant platforms, from schema to deployed API." },
  { title: "API Design", body: "REST APIs with clear contracts, versioning, and auth that holds up under real traffic." },
  { title: "Database Architecture", body: "PostgreSQL schemas designed for correctness first, then speed — indexes, constraints, migrations." },
  { title: "System Design", body: "Auth flows, RBAC, multi-tenancy boundaries — the parts that are expensive to get wrong later." }
];

const stack = ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"];
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]" />
    </div>

    <div class="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
        class="order-1 lg:order-2"
      >
        <div class="relative mx-auto max-w-sm lg:max-w-none">
          <img
            src="/images/portrait-desktop.webp"
            alt="Portrait of Lu, backend and systems engineer"
            width="891"
            height="1024"
            fetchpriority="high"
            decoding="async"
            class="hidden w-full rounded-2xl object-cover sm:block"
          />
          <img
            src="/images/portrait-mobile.webp"
            alt="Portrait of Lu, backend and systems engineer"
            width="799"
            height="942"
            fetchpriority="high"
            decoding="async"
            class="w-full rounded-2xl object-cover sm:hidden"
          />
        </div>
      </div>

      <div class="order-2 lg:order-1">
        <p
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="eyebrow mb-5"
        >
          Backend & Systems Engineer
        </p>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="max-w-xl text-display-lg font-display font-semibold leading-[1.05] text-ink sm:text-display-xl"
        >
          Designing APIs,
          databases,
          and systems
          that scale.
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="mt-6 max-w-[600px] text-lg leading-relaxed text-ink-muted"
        >
          Helping businesses build reliable software through thoughtful architecture,
          scalable backend systems, and modern SaaS development.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="mt-10 flex flex-wrap gap-4"
        >
          <BaseButton to="/projects" class="hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(13,157,111,0.5)]">
            View Projects
          </BaseButton>
          <BaseButton to="/about" variant="secondary" class="hover:-translate-y-0.5">
            More About My Approach
          </BaseButton>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 400 } }"
          class="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint"
        >
          <span v-for="(tech, i) in stack" :key="tech" class="flex items-center gap-5">
            {{ tech }}
            <span v-if="i < stack.length - 1" class="h-1 w-1 rounded-full bg-border" />
          </span>
        </div>
      </div>
    </div>
  </section>

  <div class="divider" />

  <section class="container-page py-20">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 20, filter: 'blur(8px)' }"
      :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600 } }"
      class="mb-10 text-2xl font-semibold text-ink"
    >
      What I Do
    </h2>
    <div class="grid gap-5 sm:grid-cols-2">
      <BaseCard
        v-for="(item, i) in whatIDo"
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
  </section>

  <div class="divider" />

  <section class="container-page py-20">
    <h2
      v-motion
      :initial="{ opacity: 0, y: 20, filter: 'blur(8px)' }"
      :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600 } }"
      class="mb-10 text-2xl font-semibold text-ink"
    >
      Featured Projects
    </h2>
    <ProjectGrid :projects="featuredProjects" />
  </section>

  <section class="container-page py-24 text-center">
    <h2 class="mb-4 text-2xl font-semibold text-ink">Have a project in mind?</h2>
    <p class="mb-8 text-ink-muted">I'm currently available for freelance backend and SaaS work.</p>
    <BaseButton to="/contact">Get in Touch</BaseButton>
  </section>
</template>