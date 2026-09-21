export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  // Tailwind module (Motion is handled safely via plugins to prevent SSR errors)
  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ludwig Maingi — Backend & Systems Engineer",
      meta: [
        // Google Search Console Verification
        {
          name: "google-site-verification",
          content: "aFmrr8V5d06SudLs6m_X_S7HaHFDdJ88wgCKrcb64Hw"
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Designing scalable APIs, robust databases, and multi-tenant SaaS systems. Specializing in TypeScript, Node.js, and raw PostgreSQL. Available for global remote contracts."
        },
        // Open Graph / Social Media Preview
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Ludwig Maingi" },
        { property: "og:title", content: "Ludwig Maingi — Backend & Systems Engineer" },
        {
          property: "og:description",
          content:
            "Designing scalable APIs, robust databases, and multi-tenant SaaS systems. Available for global remote contracts."
        },
        {
          property: "og:image",
          content: "https://ludwigmaingi.vercel.app/og-default.png"
        },
        { property: "og:url", content: "https://ludwigmaingi.vercel.app/" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Ludwig Maingi — Backend & Systems Engineer" },
        {
          name: "twitter:description",
          content: "Designing APIs, databases, and systems that scale."
        },
        {
          name: "twitter:image",
          content: "https://ludwigmaingi.vercel.app/og-default.png"
        }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        }
      ]
    }
  },

  // Parse markdown files as raw text
  vite: {
    assetsInclude: ["**/*.md"]
  },

  // Pre-render static HTML for every route for search engines
  nitro: {
    prerender: {
      routes: [
        "/projects/soko-platform",
        "/projects/joy-agency",
        "/projects/taskr"
      ]
    }
  }
});