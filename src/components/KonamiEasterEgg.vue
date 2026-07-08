<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let position = 0;

function onKeydown(e: KeyboardEvent) {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  const expected = sequence[position];

  if (key === expected) {
    position += 1;
    if (position === sequence.length) {
      position = 0;
      router.push("/dev");
    }
  } else {
    position = key === sequence[0] ? 1 : 0;
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  console.log(
    "%cLooking for the interesting stuff?%c\nTry the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
    "color:#29E0BC;font-weight:bold;font-size:13px;",
    "color:#7A8A82;font-size:12px;"
  );
});

onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template></template>