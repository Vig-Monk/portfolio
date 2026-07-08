<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import ScrollProgress from "@/components/ScrollProgress.vue";
import CommandPalette from "@/components/CommandPalette.vue";
import KonamiEasterEgg from "@/components/KonamiEasterEgg.vue";
</script>

<template>
    <ScrollProgress />
    <AppHeader />
    <MobileMenu />
    <CommandPalette />
    <KonamiEasterEgg />
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>
