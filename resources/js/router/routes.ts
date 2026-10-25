import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/StoreNavigationView.vue'),
		meta: {
			title: 'Welcome',
		},
	},
	{
		path: '/counter',
		name: 'counter',
		component: () => import('@/views/CounterView.vue'),
		meta: {
			title: 'Interactive Counter',
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
];

export default routes;
