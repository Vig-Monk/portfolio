<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ProjectGrid from "@/components/ProjectGrid.vue";
import { projects } from "@/content/projects";
import type { ProjectCategory } from "@/types/project";

onMounted(() => {
  document.title = "Projects — Lu";
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
        :class="activeCategory === 'All' ? 'border-accent-dim text-accent-bright' : 'border-border text-ink-muted hover:text-ink'"
        @click="activeCategory = 'All'"
      >
        All
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        class="rounded-lg border px-4 py-2 text-sm transition-colors"
        :class="activeCategory === cat ? 'border-accent-dim text-accent-bright' : 'border-border text-ink-muted hover:text-ink'"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <ProjectGrid :projects="filtered" />
  </section>
</template>