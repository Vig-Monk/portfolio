import { ref } from "vue";

// Same pattern as useMobileMenu — module-level singleton state.
const isOpen = ref(false);

export function useCommandPalette() {
  function open() {
    isOpen.value = true;
    document.body.style.overflow = "hidden";
  }
  function close() {
    isOpen.value = false;
    document.body.style.overflow = "";
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return { isOpen, open, close, toggle };
}