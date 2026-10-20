<script setup lang="ts">
defineOptions({
  name: 'CounterCard',
});
</script>

<template>
  <div class="counter-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.counter-card {
  background: var(--surface-secondary);
  padding: 3rem;
  border-radius: 2.5rem;
  width: 100%;
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-primary);
}
</style>
