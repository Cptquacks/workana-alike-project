import { api, apiClient } from '@/api';
import router from '@/router';
import type { authPayload, storePayload, user } from '@/types/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
	const user = ref<user | null>(null);
	const isAuthenticated = ref<boolean>(false);

	// Register
	async function store(data: storePayload): Promise<string | void> {
		// till we get the cookie
		await apiClient.get('/sanctum/csrf-cookie');

		try {
			// then we retrieve user with auth payload
			const response = await api.post<user>('/register', data);
			user.value = response.data;
			isAuthenticated.value = true;
			router.replace('/');
		} catch (err: unknown) {
			return err?.response?.data?.message ?? err?.message ?? 'Error al crear una cuenta';
		}
	}

	// Authenticate
	async function authenticate(data: authPayload): Promise<string | void> {
		// till we get the cookie
		await apiClient.get('/sanctum/csrf-cookie');

		try {
			// then we retrieve user with auth payload
			const response = await api.post<user>('/authenticate', data);
			user.value = response.data;
			isAuthenticated.value = true;
			router.replace('/');
		} catch (err: unknown) {
			return err?.response?.data?.message ?? err?.message ?? 'Error al autenticar una cuenta';
		}
	}

	async function refresh(): Promise<string | void> {
		try {
			// then we retrieve user with auth payload
			const response = await api.get<user>('/user');
			user.value = response.data;
			isAuthenticated.value = true;
		} catch (err: unknown) {
			return err?.response?.data?.message ?? err?.message ?? 'Error al recuperar una cuenta';
		}
	}

	async function logout(): Promise<string | void> {
		if (!isAuthenticated.value) return 'Not authenticated';

		try {
			// then we retrieve user with auth payload
			await api.post<user>('/logout');
			user.value = null;
			isAuthenticated.value = false;
			router.replace('/');
		} catch (err: unknown) {
			return (
				err?.response?.data?.message ?? err?.message ?? 'Error al desautenticar una cuenta'
			);
		}
	}

	return {
		user,
		isAuthenticated,
		store,
		authenticate,
		refresh,
		logout,
	};
});
