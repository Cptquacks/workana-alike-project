<script setup lang="ts">
import { useAuthStore } from '@/stores';
import { onMounted } from 'vue';

const auth = useAuthStore()
onMounted(async () => console.log(await auth.refresh()))
</script>
<template>
	<div class="transition min-h-screen bg-(--surface-primary) color-(--text-primary)">
		<main class="max-w-full min-h-screen flex-1 overflow-y-auto overflow-x-hidden">
			<div class="page-transition-wraper h-screen">
				<slot />
			</div>
		</main>
	</div>
</template>
