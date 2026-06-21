<script setup lang="ts">
import { onMounted, reactive } from "vue";
import BaseButton from "@/components/BaseButton.vue";

onMounted(() => {
  document.title = "Contact — Lu";
});

const form = reactive({ name: "", email: "", message: "" });
const submitted = ref(false);

function handleSubmit() {
  // UI only — wire this to an endpoint (Formspree, your own API, etc.) later.
  submitted.value = true;
}
</script>

<script lang="ts">
import { ref } from "vue";
</script>

<template>
  <section class="container-page py-20">
    <p class="eyebrow mb-3">Contact</p>
    <h1 class="mb-6 text-display-lg font-display font-semibold text-ink">Let's talk.</h1>

    <div class="mb-12 flex flex-wrap items-center gap-3">
      <span class="inline-flex items-center gap-2 rounded-full border border-accent-dim bg-accent/10 px-3 py-1 text-sm text-accent-bright">
        <span class="h-2 w-2 rounded-full bg-accent-bright"></span>
        Available for freelance work
      </span>
      <span class="text-sm text-ink-muted">Usually responds within 1–2 days</span>
    </div>

    <div class="grid gap-12 sm:grid-cols-2">
      <div>
        <h2 class="mb-4 text-lg font-semibold text-ink">Reach me directly</h2>
        <ul class="space-y-3 text-sm">
          <li><a href="mailto:hello@vig-monk.dev" class="text-ink-muted hover:text-ink">hello@vig-monk.dev</a></li>
          <li><a href="https://github.com/Vig-Monk" target="_blank" rel="noopener noreferrer" class="text-ink-muted hover:text-ink">github.com/Vig-Monk</a></li>
        </ul>
      </div>

      <form v-if="!submitted" class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="mb-1.5 block text-sm text-ink-muted">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink focus:border-accent-dim"
          />
        </div>
        <div>
          <label for="email" class="mb-1.5 block text-sm text-ink-muted">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink focus:border-accent-dim"
          />
        </div>
        <div>
          <label for="message" class="mb-1.5 block text-sm text-ink-muted">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full rounded-lg border border-border bg-canvas-raised px-4 py-2.5 text-sm text-ink focus:border-accent-dim"
          />
        </div>
        <BaseButton type="submit">Send Message</BaseButton>
      </form>

      <p v-else class="text-ink-muted">
        Thanks — this form isn't wired to a backend yet, so nothing was actually sent.
        Use the email link instead until that's connected.
      </p>
    </div>
  </section>
</template>