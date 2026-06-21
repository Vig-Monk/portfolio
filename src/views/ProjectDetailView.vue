<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import TechBadge from "@/components/TechBadge.vue";
import BaseButton from "@/components/BaseButton.vue";
import { getProjectBySlug } from "@/content/projects";

const props = defineProps<{ slug: string }>();
const router = useRouter();
const entry = computed(() => getProjectBySlug(props.slug));

onMounted(() => {
  if (!entry.value) {
    router.replace({ name: "not-found" });
    return;
  }
  document.title = `${entry.value.frontmatter.title} — Lu`;
});
</script>

<template>
  <article v-if="entry" class="container-page py-20">
    <p class="eyebrow mb-3">{{ entry.frontmatter.categories.join(" · ") }}</p>
    <h1 class="mb-4 text-display-lg font-display font-semibold text-ink">
      {{ entry.frontmatter.title }}
    </h1>
    <p class="mb-6 max-w-2xl text-ink-muted">{{ entry.frontmatter.summary }}</p>

    <div class="mb-8 flex flex-wrap gap-2">
      <TechBadge v-for="tech in entry.frontmatter.techStack" :key="tech" :label="tech" />
    </div>

    <div class="mb-12 flex flex-wrap gap-3">
      <BaseButton v-if="entry.frontmatter.githubUrl" :href="entry.frontmatter.githubUrl" variant="secondary">
        View on GitHub
      </BaseButton>
      <BaseButton v-if="entry.frontmatter.demoUrl" :href="entry.frontmatter.demoUrl">
        Live Demo
      </BaseButton>
    </div>

    <div class="divider mb-12" />

    <MarkdownRenderer :source="entry.content" />
  </article>
</template>