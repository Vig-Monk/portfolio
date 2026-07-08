<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { ProjectFrontmatter } from "@/types/project";

defineProps<{ projects: ProjectFrontmatter[] }>();
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <div
      v-for="(project, i) in projects"
      :key="project.slug"
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 100 } }"
    >
      <ProjectCard :project="project" />
    </div>
  </div>
</template>