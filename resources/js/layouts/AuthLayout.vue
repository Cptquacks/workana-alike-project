<template>
	<div class="flex transition min-h-screen bg-(--surface-primary) color-(--text-primary)">
		<main class="flex-1 max-w-full overflow-y-auto overflow-x-hidden">
			<div class="flex min-h-full min-w-full page-transition-wraper *:flex-1">
				<slot />
			</div>
		</main>
	</div>
</template>
