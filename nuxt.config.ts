export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ludwig Maingi — Backend & Systems Engineer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Designing scalable APIs, robust databases, and multi-tenant SaaS systems. Specializing in TypeScript, Node.js, and raw PostgreSQL."
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Ludwig Maingi" },
        { property: "og:title", content: "Ludwig Maingi — Backend & Systems Engineer" },
        {
          property: "og:description",
          content: "Designing APIs, databases, and systems that scale."
        },
        {
          property: "og:image",
          content: "https://ludwigmaingi.vercel.app/og-default.png"
        },
        { name: "twitter:card", content: "summary_large_image" }
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

  vite: {
    assetsInclude: ["**/*.md"]
  },

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