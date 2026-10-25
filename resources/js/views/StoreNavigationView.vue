<script setup lang="ts">
import TopBar from '@/components/shared/TopBar.vue';
import { UiStoreItem } from '@/components/ui';
import { useAuthStore } from '@/stores';
import { useStoresStore } from '@/stores/modules/stores';
import { onMounted } from 'vue';

const auth = useAuthStore()
const stores = useStoresStore()

onMounted(async () => await stores.fetchStores())
</script>

<template>
	<top-bar>
		<strong>{{ auth.user?.email ?? 'Not authenticated' }}</strong>
	</top-bar>
	<br>
	<section class="flex-1 flex flex-col gap-3 p-2">
		<section class="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 ">
			<ui-store-item v-for="store in stores.stores" :key="store.id" :data="store" />
		</section>
	</section>
</template>
