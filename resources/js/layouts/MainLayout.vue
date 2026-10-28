<script setup lang="ts">
import SideBar from '@/components/shared/SideBar.vue';
import { useAuthStore } from '@/stores';
import { onMounted } from 'vue';

const auth = useAuthStore()
onMounted(async () => console.log(await auth.refresh()))
</script>
<template>
	<div class="layout-container">
		<main class="main-content flex flex-row min-h-screen">
			<side-bar />
			<div class="flex-1 page-transition-wrapper flex flex-col">
				<slot />
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.layout-container {
	min-height: 100vh;
	background-color: var(--surface-primary);
	color: var(--text-primary);
	transition:
		background-color 0.3s ease,
		color 0.3s ease;
}

.main-content {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}
</style>
