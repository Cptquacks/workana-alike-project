import { useAuthStore } from '@/stores/index';
import type { RouteLocationNormalized } from 'vue-router';

export const authGuard = async (to: RouteLocationNormalized) => {
	const auth = useAuthStore();
	if (!auth.isAuthenticated) {
		await auth.refresh();
	}

	if (to.meta.requiresAuth && !auth.isAuthenticated) {
		return { name: 'authentication', query: { redirect: to.fullPath } };
	}

	if (to.name === 'login' && auth.isAuthenticated) {
		return { name: 'home' };
	}
};
