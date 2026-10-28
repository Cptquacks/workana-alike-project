<script setup lang="ts">
import { computed, ref } from 'vue';
import type { StoreProps } from './types';
import { Icon } from '@iconify/vue';
import { isStoreOpen } from '@/utils/time.ts';
import UiWrapper from '../wrapper/UiWrapper.vue';
import UiButton from '../button/UiButton.vue';
import UiOpenDisplay from '../openDisplay/UiOpenDisplay.vue';


const props = defineProps<StoreProps>()
const data = ref({ ...props.data })
const strippedName = computed(() =>
    data.value.name.length > 16 ?
        data.value.name.slice(-16) + '...' :
        data.value.name
)
const isOpen = computed(() => isStoreOpen(data.value.open_time, data.value.closing_time, data.value.days_open))
</script>

<template>
    <ui-wrapper form="rounded"
        class="cursor-pointer h-64! shadow-lg shadow-black/50 lg:hover:-translate-y-1 lg:hover:bg-(--surface-accent) lg:hover:border-(--border-focus)"
        max-height="xs" max-width="full" padding="xs">
        <img src="/public/favicon.ico" alt="can't load image XP'" class="flex-1 h-full object-cover object-center">

        <div class="flex flex-col">
            <strong>{{ strippedName }}</strong>
        </div>

        <div class="flex flex-row items-center justify-between">

            <div class="flex flex-row items-center gap-1">
                <ui-wrapper form="square" type="secondary" class="flex flex-row items-center gap-0.75" max-width="fit"
                    padding="xs">
                    <icon icon="heroicons:star" class="text-(--warning-text)" />
                    <p class="text-sm">{{ data.rate }}</p>
                </ui-wrapper>

                <ui-open-display :is-open="isOpen" />
            </div>

            <ui-button size="xs" variant="ghost">
                <icon icon="heroicons:arrow-right" class="text-lg" />
            </ui-button>
        </div>
    </ui-wrapper>
</template>