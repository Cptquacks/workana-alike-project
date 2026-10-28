<script setup lang="ts">
import { useStoresStore } from '@/stores/modules/stores';
import { onMounted } from 'vue';
import { UiStoreItem } from '../ui';


const stores = useStoresStore()

onMounted(async () => await stores.fetchStores())
</script>
<template>

    <section class="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        <ui-store-item v-for="store in stores.stores" :key="store.id" :data="store" />
    </section>
</template>