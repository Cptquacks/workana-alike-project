<script setup lang="ts">
import StoreNavigation from '@/components/shared/StoreNavigation.vue';
import TopBar from '@/components/shared/TopBar.vue';
</script>

<template>
	<top-bar>
	</top-bar>
	<br>
	<section class="flex-1 flex flex-col gap-3 p-2">
		<store-navigation />
	</section>
</template>
