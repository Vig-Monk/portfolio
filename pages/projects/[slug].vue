<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug as string);

const { data: entry } = await useAsyncData(`project-${slug.value}`, () =>
  getProjectBySlug(slug.value)
);

if (!entry.value) {
  throw createError({ statusCode: 404, statusMessage: "Project Not Found" });
}

useSeoMeta({
  title: () => `${entry.value?.frontmatter.title} — Case Study | Ludwig Maingi`,
  description: () => entry.value?.frontmatter.summary,
  ogTitle: () => `${entry.value?.frontmatter.title} — Ludwig Maingi`,
  ogDescription: () => entry.value?.frontmatter.summary,
  ogUrl: () => `https://ludwigmaingi.vercel.app/projects/${slug.value}`,
  twitterCard: "summary_large_image"
});

useHead({
  link: [
    { rel: "canonical", href: () => `https://ludwigmaingi.vercel.app/projects/${slug.value}` }
  ]
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
      <BaseButton
        v-if="entry.frontmatter.githubUrl"
        :href="entry.frontmatter.githubUrl"
        variant="secondary"
      >
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