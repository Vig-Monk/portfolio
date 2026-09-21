<script setup lang="ts">
useSeoMeta({
  title: "Contact — Ludwig Maingi | Backend & Systems Engineer",
  description:
    "Get in touch with Ludwig Maingi for global remote contracts, backend systems architecture, and SaaS development. Based in UTC+3 with European and US overlap.",
  ogTitle: "Contact — Ludwig Maingi",
  ogDescription:
    "Available for global remote backend engineering contracts and freelance architecture projects.",
  ogUrl: "https://ludwigmaingi.vercel.app/contact"
});

useHead({
  link: [{ rel: "canonical", href: "https://ludwigmaingi.vercel.app/contact" }]
});

const form = reactive({ name: "", email: "", message: "" });
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>

<template>
  <section class="container-page py-20">
    <p class="eyebrow mb-3">Contact</p>
    <h1 class="mb-6 text-display-lg font-display font-semibold text-ink">Let's talk.</h1>

    <!-- International Remote Status & Timezone Signals -->
    <div class="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-accent-dim bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent-bright">
        <span class="h-2 w-2 rounded-full bg-accent-bright animate-pulse" />
        Available for global remote contracts &amp; freelance work
      </span>
      <span class="text-sm text-ink-muted">Usually responds within 24 hours</span>
    </div>

    <div class="grid gap-12 sm:grid-cols-2">
      <div class="space-y-6">
        <div>
          <h2 class="mb-3 text-lg font-semibold text-ink">Direct Channels</h2>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="mailto:ludwigmaingi@gmail.com"
                class="font-mono text-ink-muted transition-colors hover:text-accent-bright"
              >
                ludwigmaingi@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vig-Monk"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-ink-muted transition-colors hover:text-accent-bright"
              >
                github.com/Vig-Monk ↗
              </a>
            </li>
          </ul>
        </div>

        <!-- Timezone Compatibility Block for International Leads -->
        <div class="rounded-xl border border-border bg-canvas-raised p-5">
          <h3 class="mb-2 text-sm font-semibold text-ink">Timezone &amp; Collaboration</h3>
          <p class="mb-2 text-xs leading-relaxed text-ink-muted">
            Based in Nairobi, Kenya (<strong class="text-ink">UTC+3 / EAT</strong>).
          </p>
          <ul class="space-y-1.5 text-xs text-ink-muted">
            <li class="flex items-center gap-2">
              <span class="text-accent-bright">✓</span>
              <span><strong>UK &amp; Europe (GMT/BST/CET):</strong> Full working day alignment (1–2 hour difference).</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-accent-bright">✓</span>
              <span><strong>US East Coast (EST/EDT):</strong> 3–4 hours of direct morning overlap.</span>
            </li>
          </ul>
        </div>
      </div>

      <form v-if="!submitted" class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="mb-1.5 block text-sm text-ink-muted">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label for="email" class="mb-1.5 block text-sm text-ink-muted">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none"
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label for="message" class="mb-1.5 block text-sm text-ink-muted">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim focus:outline-none"
            placeholder="Tell me about your architecture, API requirements, or project timeline..."
          />
        </div>
        <BaseButton type="submit">Send Message</BaseButton>
      </form>

      <div v-else class="rounded-xl border border-accent-dim/40 bg-accent/5 p-6 text-sm text-ink-muted">
        <p class="font-semibold text-ink">Message received!</p>
        <p class="mt-1">
          Thank you for reaching out. If your matter is urgent, please send an email directly to
          <a href="mailto:ludwigmaingi@gmail.com" class="text-accent-bright underline">ludwigmaingi@gmail.com</a>.
        </p>
      </div>
    </div>
  </section>
</template>