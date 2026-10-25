import { api } from '@/api';
import type { store } from '@/types/stores';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoresStore = defineStore('stores', () => {
	const stores = ref<store[]>([]);
	const currentStore = ref<store>();

	async function fetchStores(slice: number = -1): Promise<string | void> {
		try {
			const response = await api.get<store[]>('/stores');
			stores.value = slice > 0 ? response.data.slice(slice * -1) : response.data;
		} catch (err: unknown) {
			return err?.response?.data?.message ?? err?.message ?? 'Error al obtener stores';
		}
	}

	async function fetchStore(id: number): Promise<string | void> {
		try {
			const response = await api.get<store>(`/stores/${id}`);
			currentStore.value = response.data;
		} catch (err: unknown) {
			return err?.response?.data?.message ?? err?.message ?? 'Error al obtener stores';
		}
	}

	return {
		stores,
		currentStore,
		fetchStores,
		fetchStore,
	};
});
