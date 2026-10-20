<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import type { TipProps } from './types';

defineOptions({
  name: 'UiTip',
});

const props = withDefaults(defineProps<TipProps>(), {
  variant: 'info',
  size: 'md',
});

const classes = computed(() => ['ui-tip', `ui-tip--${props.variant}`, `ui-tip--${props.size}`]);
</script>

<template>
  <div :class="classes">
    <Icon
      v-if="icon"
      :icon="icon"
      class="ui-tip__icon"
    />
    <span
      v-if="$slots.default"
      class="ui-tip__content"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.ui-tip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2rem;
  transition: all 0.2s ease;

  // Sizes
  &--sm {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    gap: 0.375rem;

    .ui-tip__icon {
      font-size: 0.875rem;
    }
  }

  &--md {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    gap: 0.5rem;

    .ui-tip__icon {
      font-size: 1rem;
    }
  }

  &--lg {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    gap: 0.625rem;

    .ui-tip__icon {
      font-size: 1.25rem;
    }
  }

  // Variants
  &--info {
    background: var(--surface-secondary);
    color: var(--text-secondary);

    .ui-tip__icon {
      color: var(--info, var(--accent-primary));
    }
  }

  &--success {
    background: var(--success-bg, rgba(16, 185, 129, 0.1));
    color: var(--success-color, #10b981);
    border: 1px solid var(--success-border, rgba(16, 185, 129, 0.2));

    .ui-tip__icon {
      color: var(--success-color, #10b981);
    }
  }

  &--warning {
    background: var(--warning-bg, rgba(245, 158, 11, 0.1));
    color: var(--warning-color, #f59e0b);
    border: 1px solid var(--warning-border, rgba(245, 158, 11, 0.2));

    .ui-tip__icon {
      color: var(--warning-color, #f59e0b);
    }
  }

  &--danger {
    background: var(--danger-bg, rgba(239, 68, 68, 0.1));
    color: var(--danger-color, #ef4444);
    border: 1px solid var(--danger-border, rgba(239, 68, 68, 0.2));

    .ui-tip__icon {
      color: var(--danger-color, #ef4444);
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  &__content {
    display: inline-flex;
    align-items: center;
  }
}
</style>
