<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue';
</script>

<template>
  <div class="layout-container">
    <AppHeader />

    <main class="main-content">
      <div class="page-transition-wrapper">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  min-height: 100vh;
  background-color: var(--surface-primary);
  color: var(--text-primary);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  padding-top: 6rem;
}

.main-content {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
}
</style>
