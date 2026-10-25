<script setup lang="ts">
import { computed } from 'vue';
import type { OpenDisplayProps } from './types';

const props = defineProps<OpenDisplayProps>()
const isOpen = computed(() =>
    props.isOpen ?
        'bg-(--success-bg) text-(--success-text) border-(--border-success)/50' :
        'bg-(--error-bg) text-(--error-text) border-(--border-error)/50'
)
</script>

<template>
    <span :class="['flex flex-row items-center justify-center px-2 py-1 border rounded-sm', isOpen]">
        <p class="text-sm">{{ props.isOpen ? "Abierto" : "Cerrado" }}</p>
    </span>
</template>