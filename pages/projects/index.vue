<script setup lang="ts">
import type { ProjectCategory } from "~/types/project";

useSeoMeta({
  title: "Projects — Ludwig Maingi",
  description:
    "Featured engineering work, systems architecture, and SaaS applications built with TypeScript, PostgreSQL, and Node.js.",
  ogTitle: "Projects — Ludwig Maingi",
  ogDescription: "Featured engineering work and system architecture case studies.",
  ogUrl: "https://ludwigmaingi.vercel.app/projects"
});

useHead({
  link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/projects" }]
});

const categories: ProjectCategory[] = ["SaaS", "Backend", "Full Stack"];
const activeCategory = ref<ProjectCategory | "All">("All");

const filtered = computed(() => {
  if (activeCategory.value === "All") return projects;
  return projects.filter((p) => p.categories.includes(activeCategory.value as ProjectCategory));
});
</script>

<template>
  <section class="container-page py-20">
    <p class="eyebrow mb-3">Work</p>
    <h1 class="mb-8 text-display-lg font-display font-semibold text-ink">Projects</h1>

    <div class="mb-10 flex flex-wrap gap-2">
      <button
        type="button"
        class="rounded-lg border px-4 py-2 text-sm transition-colors"
        :class="
          activeCategory === 'All'
            ? 'border-accent-dim text-accent-bright'
            : 'border-border text-ink-muted hover:text-ink'
        "
        @click="activeCategory = 'All'"
      >
        All
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        class="rounded-lg border px-4 py-2 text-sm transition-colors"
        :class="
          activeCategory === cat
            ? 'border-accent-dim text-accent-bright'
            : 'border-border text-ink-muted hover:text-ink'
        "
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <ProjectGrid :projects="filtered" />
  </section>
</template>