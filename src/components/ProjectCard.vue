<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import TechBadge from "@/components/TechBadge.vue";
import type { ProjectFrontmatter } from "@/types/project";

defineProps<{ project: ProjectFrontmatter }>();
</script>

<template>
  <BaseCard class="group relative">
    <RouterLink
      :to="`/projects/${project.slug}`"
      class="absolute inset-0 z-0 rounded-xl"
      :aria-label="`View case study — ${project.title}`"
    />

    <div class="pointer-events-none relative z-[1]">
      <p class="eyebrow mb-2">{{ project.categories.join(" · ") }}</p>
      <h3 class="mb-2 text-lg font-semibold text-ink">{{ project.title }}</h3>
      <p class="mb-4 text-sm text-ink-muted">{{ project.summary }}</p>
      <div class="flex flex-wrap gap-2">
        <TechBadge v-for="tech in project.techStack" :key="tech" :label="tech" />
      </div>
    </div>

    <div
      class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]"
    >
      <div class="min-h-0 overflow-hidden">
        <div class="relative z-[1] mt-4 border-t border-border pt-4">
          <p class="eyebrow pointer-events-none mb-2">Architecture Focus</p>
          <div class="pointer-events-none mb-3 flex flex-wrap gap-2">
            <span
              v-for="highlight in project.architectureHighlights"
              :key="highlight"
              class="rounded-md bg-canvas-inset px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {{ highlight }}
            </span>
          </div>

          <div class="flex items-center gap-4 text-sm">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="relative z-10 pointer-events-auto text-ink-muted hover:text-ink"
              @click.stop
            >
              GitHub ↗
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="relative z-10 pointer-events-auto text-ink-muted hover:text-ink"
              @click.stop
            >
              Live Demo ↗
            </a>
            <span class="ml-auto inline-flex items-center gap-1 text-accent-bright">
              View case study
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>