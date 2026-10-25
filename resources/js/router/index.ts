import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return { top: 0 };
	},
});

router.afterEach(to => {
	document.title = `${to.meta.title || 'Laravel Vue'} | Home`;
});

export default router;
