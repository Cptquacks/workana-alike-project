import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './stores/pinia';
import { useTheme } from '@/composables/use-theme';
import { registerUiComponents } from '@/composables/use-ui';
import { addCollection } from '@iconify/vue';
import { icons } from '@iconify-json/heroicons/index.js';

addCollection(icons);

const app = createApp(App);

app.use(router);
app.use(pinia);

registerUiComponents(app);
useTheme();

app.mount('#app');
