<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import TechBadge from "@/components/TechBadge.vue";
import BaseButton from "@/components/BaseButton.vue";
import { getProjectBySlug } from "@/content/projects";
import type { ProjectFrontmatter } from "@/types/project";

const props = defineProps<{ slug: string }>();
const router = useRouter();

const entry = ref<{ frontmatter: ProjectFrontmatter; content: string } | null>(null);
const loading = ref(true);

let requestToken = 0;

async function load(slug: string) {
  const token = ++requestToken;
  loading.value = true;
  entry.value = null;

  const result = await getProjectBySlug(slug);

  // A newer navigation started while this one was in flight — drop it.
  if (token !== requestToken) return;

  if (!result) {
    loading.value = false;
    router.replace({ name: "not-found" });
    return;
  }

  entry.value = result;
  loading.value = false;
  document.title = `${result.frontmatter.title} — Lu`;
}

watch(() => props.slug, (slug) => load(slug), { immediate: true });
</script>

<template>
  <article v-if="loading" class="container-page py-20">
    <p class="text-ink-muted">Loading…</p>
  </article>

  <article v-else-if="entry" class="container-page py-20">
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