<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import type { BadgeProps } from './types';

defineOptions({
	name: 'UiBadge',
});

const props = withDefaults(defineProps<BadgeProps>(), {
	variant: 'secondary',
	size: 'md',
});

const classes = computed(() => [
	'ui-badge',
	`ui-badge--${props.variant}`,
	`ui-badge--${props.size}`,
]);
</script>

<template>
	<div :class="classes">
		<Icon
			v-if="icon"
			:icon="icon"
			class="ui-badge__icon"
		/>
		<span
			v-if="$slots.default"
			class="ui-badge__content"
		>
			<slot />
		</span>
	</div>
</template>

<style lang="scss" scoped>
.ui-badge {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border-radius: 2rem;
	font-weight: 600;
	transition: all 0.2s ease;

	// Sizes
	&--sm {
		padding: 0.375rem 0.75rem;
		font-size: 0.75rem;
		gap: 0.375rem;

		.ui-badge__icon {
			font-size: 0.875rem;
		}
	}

	&--md {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		gap: 0.5rem;

		.ui-badge__icon {
			font-size: 1rem;
		}
	}

	&--lg {
		padding: 0.625rem 1.25rem;
		font-size: 1rem;
		gap: 0.625rem;

		.ui-badge__icon {
			font-size: 1.25rem;
		}
	}

	// Variants
	&--primary {
		background: var(--button-primary-bg, var(--surface-secondary));
		border: 1px solid var(--border-primary);
		color: var(--button-primary-text, var(--text-primary));
	}

	&--secondary {
		background: var(--surface-secondary);
		border: 1px solid var(--border-primary);
		color: var(--accent-primary);
	}

	&--accent {
		background: var(--accent-primary);
		border: 1px solid var(--accent-primary);
		color: var(--surface-primary);
	}

	&--success {
		background: var(--success-bg, rgba(16, 185, 129, 0.1));
		border: 1px solid var(--success-border, rgba(16, 185, 129, 0.3));
		color: var(--success-color, #10b981);
	}

	&--warning {
		background: var(--warning-bg, rgba(245, 158, 11, 0.1));
		border: 1px solid var(--warning-border, rgba(245, 158, 11, 0.3));
		color: var(--warning-color, #f59e0b);
	}

	&--danger {
		background: var(--danger-bg, rgba(239, 68, 68, 0.1));
		border: 1px solid var(--danger-border, rgba(239, 68, 68, 0.3));
		color: var(--danger-color, #ef4444);
	}

	&--outline {
		background: transparent;
		border: 1px solid var(--border-secondary);
		color: var(--text-secondary);
	}

	&__icon {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	&__content {
		display: inline-flex;
		align-items: center;
	}
}
</style>
