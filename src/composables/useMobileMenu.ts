import { ref } from "vue";

// Module-level state, shared by every component that imports this —
// the simplest possible substitute for a Pinia store when you only
// have one small piece of cross-cutting UI state.
const isOpen = ref(false);

export function useMobileMenu() {
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