<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary";
  to?: string;
  href?: string;
  type?: "button" | "submit";
}

const props = withDefaults(defineProps<Props>(), { variant: "primary", type: "button" });

const tag = computed(() => (props.to ? "router-link" : props.href ? "a" : "button"));

const variantClasses = computed(() =>
  props.variant === "primary"
    ? "bg-accent text-canvas hover:bg-accent-bright"
    : "bg-transparent border border-border text-ink hover:border-accent-dim hover:text-accent-bright"
);
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>