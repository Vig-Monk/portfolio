<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import TechBadge from "@/components/TechBadge.vue";
import type { ProjectFrontmatter } from "@/types/project";

defineProps<{ project: ProjectFrontmatter }>();
</script>

<template>
  <RouterLink :to="`/projects/${project.slug}`" class="block">
    <BaseCard>
      <p class="eyebrow mb-2">{{ project.categories.join(" · ") }}</p>
      <h3 class="mb-2 text-lg font-semibold text-ink">{{ project.title }}</h3>
      <p class="mb-4 text-sm text-ink-muted">{{ project.summary }}</p>
      <div class="flex flex-wrap gap-2">
        <TechBadge v-for="tech in project.techStack" :key="tech" :label="tech" />
      </div>
    </BaseCard>
  </RouterLink>
</template>