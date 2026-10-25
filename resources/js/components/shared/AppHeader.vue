<script setup lang="ts">
import { useTheme } from '@/composables/use-theme';
import { Icon } from '@iconify/vue';

defineOptions({
	name: 'AppHeader',
});

const { isDark, toggleTheme } = useTheme();

const menuItems = [
	{
		to: '/',
		icon: 'solar:home-smile-bold',
		label: 'Hello',
	},
	{
		to: '/counter',
		icon: 'solar:stopwatch-play-bold',
		label: 'Counter',
	},
];
</script>

<template>
	<header class="floating-header">
		<div class="header-content">
			<div class="logo">Laravel / Vue</div>

			<nav class="main-nav">
				<router-link
					v-for="item in menuItems"
					:key="item.to"
					:to="item.to"
					class="nav-link"
					active-class="active"
				>
					<Icon :icon="item.icon" />
					<span>{{ item.label }}</span>
				</router-link>
			</nav>

			<div class="actions">
				<UiButton
					variant="ghost"
					size="sm"
					class="theme-toggle"
					:title="isDark ? 'Switch to Light' : 'Switch to Dark'"
					@click="toggleTheme()"
				>
					<Icon
						:icon="isDark ? 'solar:sun-bold' : 'solar:moon-bold'"
						class="theme-icon"
					/>
				</UiButton>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.floating-header {
	position: fixed;
	top: 1.5rem;
	left: 50%;
	transform: translateX(-50%);
	width: auto;
	min-width: 320px;
	z-index: 100;

	background: var(--surface-primary);
	border: 1px solid var(--border-primary);
	border-radius: 100px;
	box-shadow: var(--shadow-lg);
	transition: all 0.3s ease;

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		height: 3.5rem;
		gap: 2rem;
		box-sizing: border-box;
	}
}

.logo {
	display: flex;
	align-items: center;
	height: 100%;
	font-weight: 700;
	font-size: 1.25rem;
}

.main-nav {
	display: flex;
	gap: 0.25rem;
	background: var(--surface-secondary);
	padding: 0.25rem;
	border-radius: 2rem;
}

.nav-link {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1.25rem;
	text-decoration: none;
	color: var(--text-secondary);
	font-weight: 600;
	font-size: 0.9rem;
	border-radius: 1.5rem;
	transition: all 0.2s ease;

	&:hover {
		color: var(--text-primary);
		background: var(--surface-hover);
	}

	&.active {
		background: var(--surface-primary);
		color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}
}

.actions {
	display: flex;
	align-items: center;
}

.theme-toggle {
	width: 2.5rem;
	height: 2.5rem;
	padding: 0;
	border-radius: 50%;

	.theme-icon {
		font-size: 1.25rem;
		transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	&:hover .theme-icon {
		transform: rotate(90deg);
	}
}

@media (max-width: 768px) {
	.floating-header {
		width: 90%;
		border-radius: 1.5rem;

		.header-content {
			gap: 1rem;
		}
	}

	.nav-link span {
		display: none;
	}
}
</style>
