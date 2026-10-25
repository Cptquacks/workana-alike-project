<script setup lang="ts">
import CounterCard from '@/components/features/counter/CounterCard.vue';
import CounterHeaderStats from '@/components/features/counter/CounterHeaderStats.vue';
import CounterClicker from '@/components/features/counter/CounterClicker.vue';
import CounterControls from '@/components/features/counter/CounterControls.vue';
import { useCounter } from '@/composables/use-counter';

const { mounted, count, level, rank, comboMultiplier, strokeDashoffset, handleIncrement, reset } =
	useCounter();
</script>

<template>
	<div class="counter-page">
		<div
			class="counter-content"
			:class="{ visible: mounted }"
		>
			<CounterCard>
				<CounterHeaderStats
					:level="level"
					:rank="rank"
					:combo-multiplier="comboMultiplier"
				/>
				<CounterClicker
					:count="count"
					:stroke-dashoffset="strokeDashoffset"
					@increment="handleIncrement"
				/>
				<CounterControls @reset="reset" />
			</CounterCard>

			<UiTip icon="solar:info-circle-bold"
				>Click faster to increase your combo multiplier!</UiTip
			>
		</div>
	</div>
</template>

<style lang="scss">
// Global particle style
.particle {
	position: fixed;
	border-radius: 50%;
	pointer-events: none;
	z-index: 9999;
}
</style>

<style lang="scss" scoped>
.counter-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
}

.counter-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
	width: 100%;
	max-width: 400px;

	&.visible {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
