<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineOptions({
  name: 'CounterHeaderStats',
});

interface Props {
  level: number;
  rank: string;
  comboMultiplier: number;
}

defineProps<Props>();
</script>

<template>
  <div class="header-stats">
    <div class="stat">
      <span class="label">Level</span>
      <span class="value">{{ level }}</span>
    </div>
    <div class="rank-badge">
      <Icon icon="solar:medal-star-circle-bold-duotone" />
      {{ rank }}
    </div>
    <div class="stat">
      <span class="label">Combo</span>
      <span class="value x-stat">x{{ comboMultiplier.toFixed(1) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  .label {
    font-size: 0.75rem;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    font-feature-settings: 'tnum';

    &.x-stat {
      color: var(--accent-secondary);
    }
  }
}

.rank-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--accent-primary);
  font-weight: 600;

  svg {
    font-size: 2rem;
  }
}
</style>
