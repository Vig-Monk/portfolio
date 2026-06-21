<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { ProjectFrontmatter } from "@/types/project";

defineProps<{ projects: ProjectFrontmatter[] }>();
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
  </div>
</template>