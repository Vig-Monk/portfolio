<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary";
  to?: string;
  href?: string;
  type?: "button" | "submit";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  type: "button"
});

const isLink = computed(() => Boolean(props.to || props.href));
const destination = computed(() => props.to || props.href);

const variantClasses = computed(() =>
  props.variant === "primary"
    ? "bg-accent text-canvas hover:bg-accent-bright"
    : "bg-transparent border border-border text-ink hover:border-accent-dim hover:text-accent-bright"
);
</script>

<template>
  <NuxtLink
    v-if="isLink"
    :to="destination"
    :target="props.href ? '_blank' : undefined"
    :rel="props.href ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200"
    :class="variantClasses"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>