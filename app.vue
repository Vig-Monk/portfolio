<!-- app.vue -->
<script setup lang="ts">
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ludwig Maingi",
        "alternateName": "Lu",
        "jobTitle": "Backend & Systems Engineer",
        "url": "https://ludwigmaingi.vercel.app",
        "sameAs": [
          "https://github.com/Vig-Monk"
        ],
        "knowsAbout": [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Multi-tenant SaaS Architecture",
          "REST API Design",
          "Distributed Systems"
        ],
        "nationality": {
          "@type": "Country",
          "name": "Kenya"
        }
      })
    }
  ]
});
</script>

<template>
  <ScrollProgress />
  <AppHeader />
  <MobileMenu />
  <CommandPalette />
  <KonamiEasterEgg />
  <main>
    <NuxtPage />
  </main>
  <AppFooter />
</template>