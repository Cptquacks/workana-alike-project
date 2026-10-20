<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { RouterView } from 'vue-router';
import type { Component } from 'vue';

const route = useRoute();

const layouts: Record<string, Component | (() => Promise<Component>)> = {
  MainLayout: defineAsyncComponent(() => import('./layouts/MainLayout.vue')),
  // AuthLayout: () => import('@/layouts/AuthLayout.vue'),
  // EmptyLayout: () => import('@/layouts/EmptyLayout.vue'),
};

const layout = computed(() => {
  const layoutName = (route.meta.layout as string | undefined) || 'MainLayout';
  return layouts[layoutName] || layouts.MainLayout;
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
