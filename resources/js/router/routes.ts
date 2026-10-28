import { authGuard } from '@/guard/auth';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/StoreNavigationView.vue'),
		meta: {
			title: 'Pagina principal',
		},
	},
	{
		path: '/auth',
		name: 'authentication',
		component: () => import('@/views/UserAuthenticationView.vue'),
		meta: {
			title: 'Authenticacion',
			layout: 'AuthLayout',
		},
	},
	{
		path: '/new-store',
		name: 'new store',
		component: () => import('@/views/NewStoreView.vue'),
		meta: {
			title: 'Nuevo servicio',
			layout: 'EmptyLayout',
			requiresAuth: true,
		},
		beforeEnter: to => authGuard(to),
	},
];

export default routes;
