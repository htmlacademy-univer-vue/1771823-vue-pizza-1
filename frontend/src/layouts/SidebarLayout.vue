<template>
  <AppHeader />
  <main class="layout">
    <AppSidebar />
  </main>
  <slot />
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppSidebar from "@/layouts/AppSidebar.vue";
</script>

<style lang="scss" scoped></style>
