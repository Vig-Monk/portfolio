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
</script>

<template>
  <section class="container-page py-24 sm:py-32">
    <p class="eyebrow mb-5">Backend & Systems Engineer</p>
    <h1 class="max-w-3xl text-display-lg font-display font-semibold text-ink sm:text-display-xl">
      Designing APIs, databases, and systems that scale.
    </h1>
    <p class="mt-6 max-w-xl text-lg text-ink-muted">
      Helping businesses build reliable software through thoughtful architecture,
      scalable backend systems, and modern SaaS development.
    </p>
    <div class="mt-10 flex flex-wrap gap-4">
      <BaseButton to="/projects">View Projects</BaseButton>
      <BaseButton to="/about" variant="secondary">More About My Approach</BaseButton>
    </div>
  </section>

  <div class="divider" />

  <section class="container-page py-20">
    <h2 class="mb-10 text-2xl font-semibold text-ink">What I Do</h2>
    <div class="grid gap-5 sm:grid-cols-2">
      <BaseCard v-for="item in whatIDo" :key="item.title" :hoverable="false">
        <h3 class="mb-2 font-semibold text-ink">{{ item.title }}</h3>
        <p class="text-sm text-ink-muted">{{ item.body }}</p>
      </BaseCard>
    </div>
  </section>

  <div class="divider" />

  <section class="container-page py-20">
    <h2 class="mb-10 text-2xl font-semibold text-ink">Featured Projects</h2>
    <ProjectGrid :projects="featuredProjects.map((p) => p.frontmatter)" />
  </section>

  <section class="container-page py-24 text-center">
    <h2 class="mb-4 text-2xl font-semibold text-ink">Have a project in mind?</h2>
    <p class="mb-8 text-ink-muted">I'm currently available for freelance backend and SaaS work.</p>
    <BaseButton to="/contact">Get in Touch</BaseButton>
  </section>
</template>