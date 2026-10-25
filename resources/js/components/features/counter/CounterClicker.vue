<script setup lang="ts">
defineOptions({
	name: 'CounterClicker',
});

interface Props {
	count: number;
	strokeDashoffset: number;
}

interface Emits {
	(e: 'increment', event: MouseEvent): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleClick = (e: MouseEvent) => {
	emit('increment', e);
};
</script>

<template>
	<div class="clicker-area">
		<button
			class="click-circle"
			@mousedown="handleClick"
		>
			<svg
				class="progress-ring"
				width="200"
				height="200"
			>
				<circle
					class="progress-ring__circle-bg"
					stroke="var(--surface-tertiary)"
					stroke-width="8"
					fill="transparent"
					r="90"
					cx="100"
					cy="100"
				/>
				<circle
					class="progress-ring__circle"
					stroke="var(--accent-primary)"
					stroke-width="8"
					fill="transparent"
					r="90"
					cx="100"
					cy="100"
					:style="{ strokeDashoffset }"
				/>
			</svg>
			<div class="count-display">
				<span class="count-number">{{ count }}</span>
				<span class="count-label">CLICKS</span>
			</div>
			<div class="ripple-effect" />
		</button>
	</div>
</template>

<style lang="scss" scoped>
.clicker-area {
	position: relative;
}

.click-circle {
	position: relative;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: none;
	background: var(--surface-primary);
	box-shadow:
		inset 5px 5px 10px var(--shadow-sm),
		10px 10px 20px var(--shadow-md);
	cursor: pointer;
	outline: none;
	transition: transform 0.1s ease;
	display: flex;
	align-items: center;
	justify-content: center;

	&:active {
		transform: scale(0.95);
	}
}

.progress-ring {
	position: absolute;
	top: 0;
	left: 0;
	transform: rotate(-90deg);
}

.progress-ring__circle {
	stroke-dasharray: 565.48; // 2 * PI * 90
	transition: stroke-dashoffset 0.35s;
	stroke-linecap: round;
}

.count-display {
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 2;

	.count-number {
		font-size: 4rem;
		font-weight: 900;
		line-height: 1;
		color: var(--text-primary);
		font-feature-settings: 'tnum';
	}

	.count-label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-tertiary);
		letter-spacing: 0.1em;
	}
}
</style>
