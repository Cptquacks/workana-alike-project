<script setup lang="ts">
import { Icon } from '@iconify/vue';
import UiWrapper from '../wrapper/UiWrapper.vue';
import { useAuthStore } from '@/stores';
import { ref } from 'vue';


const auth = useAuthStore()
const isLoading = ref<boolean>(false)
</script>
<template>
    <ui-wrapper v-if="!auth.isAuthenticated && !isLoading"
        class="relative transition cursor-pointer items-center justify-center gap-px border-dashed! hover:bg-(--surface-accent) hover:border-(--border-focus)!"
        centered type="secondary" max-width="full" max-height="fit" flex-row>
        <icon icon="heroicons:user-plus" class="text-xl" />
        <strong>Autenticar</strong>
        <button class="absolute inset-full bg-red-200">e</button>
    </ui-wrapper>

    <ui-wrapper v-if="auth.isAuthenticated && !isLoading" class="items-center justify-stretch gap-3" centered
        type="secondary" max-width="full" max-height="fit" flex-row>
        <icon icon="heroicons:user" class="text-2xl" />
        <div class="flex flex-col items-start">
            <strong>{{ auth.user?.name }}</strong>
            <small class="text-xs opacity-50">{{ auth.user?.email }}</small>
            {{ auth.user?.stores?.length ?? 'nope' }}
        </div>
    </ui-wrapper>


    <ui-wrapper v-if="isLoading" class="items-center justify-center gap-px border-dashed! opacity-50" centered
        type="secondary" max-width="full" max-height="fit" flex-row>
        <icon icon="heroicons:arrow-path" class="text-xl animate-spin" />
        <strong>Espere un momento...</strong>
    </ui-wrapper>
</template>