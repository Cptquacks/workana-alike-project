<script setup lang="ts">
import { computed } from 'vue';
import type { TextProps } from './types';

defineOptions({
	name: 'UiText',
});

const props = withDefaults(defineProps<TextProps>(), {
	variant: 'primary',
	size: 'md',
	tag: 'p',
	weight: 'normal',
	align: 'left',
});

const classes = computed(() => [
	'ui-text',
	`ui-text--${props.variant}`,
	`ui-text--${props.size}`,
	`ui-text--${props.weight}`,
	`ui-text--align-${props.align}`,
]);
</script>

<template>
	<component
		:is="tag"
		:class="classes"
	>
		<slot />
	</component>
</template>

<style lang="scss" scoped>
.ui-text {
	margin: 0;
	line-height: 1.5;
	transition: color 0.2s ease;

	// Variants
	&--primary {
		color: var(--text-primary);
	}

	&--secondary {
		color: var(--text-secondary);
	}

	&--muted {
		color: var(--text-muted, var(--text-secondary));
		opacity: 0.7;
	}

	&--accent {
		color: var(--accent-primary);
	}

	&--success {
		color: var(--success-color, #10b981);
	}

	&--warning {
		color: var(--warning-color, #f59e0b);
	}

	&--danger {
		color: var(--danger-color, #ef4444);
	}

	// Sizes
	&--xs {
		font-size: 0.75rem;
		line-height: 1.4;
	}

	&--sm {
		font-size: 0.875rem;
		line-height: 1.5;
	}

	&--md {
		font-size: 1rem;
		line-height: 1.6;
	}

	&--lg {
		font-size: 1.125rem;
		line-height: 1.6;
	}

	&--xl {
		font-size: 1.25rem;
		line-height: 1.6;
	}

	&--2xl {
		font-size: 1.5rem;
		line-height: 1.5;
	}

	&--3xl {
		font-size: 1.875rem;
		line-height: 1.4;
	}

	&--4xl {
		font-size: 2.25rem;
		line-height: 1.3;
	}

	&--5xl {
		font-size: 3rem;
		line-height: 1.2;

		@media (max-width: 768px) {
			font-size: 2.25rem;
		}
	}

	&--6xl {
		font-size: 4.5rem;
		line-height: 1.1;

		@media (max-width: 768px) {
			font-size: 3rem;
		}
	}

	// Weights
	&--normal {
		font-weight: 400;
	}

	&--medium {
		font-weight: 500;
	}

	&--semibold {
		font-weight: 600;
	}

	&--bold {
		font-weight: 700;
	}

	&--extrabold {
		font-weight: 800;
	}

	// Alignment
	&--align-left {
		text-align: left;
	}

	&--align-center {
		text-align: center;
	}

	&--align-right {
		text-align: right;
	}

	&--align-justify {
		text-align: justify;
	}
}
</style>
