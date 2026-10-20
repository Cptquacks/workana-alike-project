import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HelloView.vue'),
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
];

export default routes;
