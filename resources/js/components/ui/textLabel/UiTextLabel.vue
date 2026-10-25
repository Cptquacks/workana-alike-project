<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { LabelProps } from './types';
import { computed } from 'vue';
defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<LabelProps>(), {
    variant: 'success'
})

const classes = computed(() => [
    'ui-label',
    `ui-label--${props.variant}`
])

const iconString = computed(() => {
    switch (props.variant) {
        case 'success':
            return 'check-circle'
        case 'warning':
            return 'exclamation-triangle'
        case 'error':
            return 'x-circle'

        default:
            return 'check-circle'
    }
})
</script>

<template>
    <span v-bind="$attrs" :class="['flex flex-row items-center px-2 py-1 gap-1 border shadow-md rounded-md', classes]">
        <icon class="text-xl" :icon="`heroicons:${iconString}`" />
        <strong>
            <slot />
        </strong>
    </span>
</template>

<style lang="scss" scoped>
.ui-label {
    &--success {
        background-color: var(--success-bg);
        border-color: var(--border-success);
        color: var(--success-text)
    }

    &--warning {
        background-color: var(--warning-bg);
        color: var(--warning-text)
    }

    &--error {
        background-color: var(--error-bg);
        border-color: var(--border-error);
        color: var(--error-text)
    }
}
</style>