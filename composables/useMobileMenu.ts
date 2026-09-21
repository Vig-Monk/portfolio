// Module-level singleton state shared across all components
const isOpen = ref(false);

export function useMobileMenu() {
  function open() {
    isOpen.value = true;
    if (import.meta.client) {
      document.body.style.overflow = "hidden";
    }
  }

  function close() {
    isOpen.value = false;
    if (import.meta.client) {
      document.body.style.overflow = "";
    }
  }

  function toggle() {
    isOpen.value ? close() : open();
  }

  return { isOpen, open, close, toggle };
}