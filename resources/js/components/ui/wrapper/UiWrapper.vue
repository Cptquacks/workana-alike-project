<script setup lang="ts">
import { computed } from 'vue';
import type { WrapperProps } from './types';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<WrapperProps>(), {
    form: 'rounded',
    type: 'primary',
    maxWidth: 'fit',
    maxHeight: 'sm',
    padding: 'sm',
    centered: false,
    flexRow: false
});

const formClass = computed(
    () =>
        ({
            square: 'border rounded-sm',
            rounded: 'border rounded-md',
            bar: 'flex-row min-w-full! border rounded-full',
        })[props.form],
);

const typeClass = computed(
    () =>
        ({
            primary: 'bg-(--surface-secondary) border-(--border-primary)',
            secondary: 'bg-(--surface-primary) border-(--border-secondary)',
            tertiary: 'bg-(--surface-tertiary) border-white/5',
        })[props.type],
);

const maxwidthClass = computed(
    () =>
        ({
            xs: 'max-w-[256px]',
            sm: 'max-w-[384px]',
            md: 'max-w-[448px]',
            lg: 'max-w-[512px]',
            xl: 'max-w-[576px]',
            fit: 'w-fit!',
            full: 'max-w-full',
        })[props.maxWidth],
);

const maxHeightClass = computed(
    () =>
        ({
            xs: 'max-h-[256px]',
            sm: 'max-h-[384px]',
            md: 'max-h-[448px]',
            lg: 'max-h-[512px]',
            xl: 'max-h-[576px]',
            fit: 'h-fit!',
            full: 'max-h-full',
        })[props.maxHeight],
);

const paddingClass = computed(
    () =>
        ({
            none: '',
            xs: 'p-1',
            sm: 'p-2',
            md: 'p-4',
            lg: 'p-8',
            xl: 'p-16',
        })[props.padding],
);
</script>

<template>
    <component :is="'div'" v-bind="$attrs" :class="[
        'transition h-full w-full flex overflow-hidden',
        flexRow ? 'flex-row' : 'flex-col',
        formClass,
        typeClass,
        props.form !== 'bar' && maxwidthClass,
        props.form !== 'bar' && maxHeightClass,
        paddingClass,
        centered && 'mx-auto',
    ]">
        <slot />
    </component>
</template>
