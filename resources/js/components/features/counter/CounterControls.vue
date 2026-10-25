<script setup lang="ts">
defineOptions({
	name: 'CounterControls',
});

interface Emits {
	(e: 'reset'): void;
}

const emit = defineEmits<Emits>();

const handleReset = () => {
	emit('reset');
};
</script>

<template>
	<div class="controls">
		<UiButton
			variant="secondary"
			icon="solar:restart-bold"
			@click="handleReset"
		>
			Reset Progress
		</UiButton>
	</div>
</template>
