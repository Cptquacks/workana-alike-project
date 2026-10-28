<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useId } from 'vue';
import type { VerticalSeparationProps } from './types';

const props = defineProps<VerticalSeparationProps>()
const separator = useId()
</script>
<template>
    <div class="relative w-full mt-3">
        <hr :id="separator" class="w-full border-(--border-secondary)">
        <label :for="separator"
            class="absolute flex flex-row items-center gap-0.5 -top-2 left-3 bg-(--surface-secondary) px-2 text-(--text-secondary)">
            <icon v-if="props.icon" :icon="`heroicons:${props.icon}`" class="text-sm" />
            <small class="text-xs">
                {{ props.label }}
            </small>
        </label>
    </div>
</template>