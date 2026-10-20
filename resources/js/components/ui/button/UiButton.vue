<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import type { ButtonProps } from './types';

defineOptions({
  name: 'UiButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  block: false,
});

const emit = defineEmits(['click']);

const componentTag = computed(() => {
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});

const classes = computed(() => [
  'ui-button',
  `ui-button--${props.variant}`,
  `ui-button--${props.size}`,
  {
    'ui-button--loading': props.loading,
    'ui-button--block': props.block,
  },
]);

const onClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>

<template>
  <component
    :is="componentTag"
    :class="classes"
    :disabled="disabled || loading"
    :to="to"
    :href="href"
    v-bind="$attrs"
    @click="onClick"
  >
    <Icon
      v-if="loading"
      icon="solar:spinner-bold"
      class="ui-button__loader animate-spin"
    />
    <Icon
      v-else-if="icon"
      :icon="icon"
      class="ui-button__icon"
    />

    <span
      v-if="$slots.default"
      class="ui-button__content"
    >
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
.ui-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  text-decoration: none;
  outline: none;
  overflow: hidden;

  &:focus-visible {
    box-shadow:
      0 0 0 2px var(--surface-primary),
      0 0 0 4px var(--accent-primary);
  }

  &:disabled,
  &--loading {
    opacity: 0.7;
    cursor: not-allowed;
  }

  // Sizes
  &--sm {
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.875rem;

    .ui-button__icon {
      font-size: 1rem;
    }
  }

  &--md {
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.95rem;

    .ui-button__icon {
      font-size: 1.25rem;
    }
  }

  &--lg {
    height: 3rem;
    padding: 0 1.5rem;
    font-size: 1.125rem;

    .ui-button__icon {
      font-size: 1.5rem;
    }
  }

  &--block {
    width: 100%;
    display: flex;
  }

  // Variants
  &--primary {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
    box-shadow: var(--shadow-md);

    &:hover:not(:disabled) {
      background-color: var(--button-primary-bg-hover);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    &:active:not(:disabled) {
      background-color: var(--button-primary-bg-active);
      transform: translateY(0);
    }
  }

  &--secondary {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
    border: 1px solid var(--border-primary);

    &:hover:not(:disabled) {
      background-color: var(--button-secondary-bg-hover);
      border-color: var(--border-secondary);
    }

    &:active:not(:disabled) {
      background-color: var(--button-secondary-bg-active);
    }
  }

  &--ghost {
    background-color: transparent;
    color: var(--text-secondary);

    &:hover:not(:disabled) {
      background-color: var(--button-ghost-bg-hover);
      color: var(--text-primary);
    }
  }

  &--outline {
    background-color: transparent;
    border: 1px solid var(--border-secondary);
    color: var(--text-primary);

    &:hover:not(:disabled) {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
    }
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
