import { computed, ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/modules/counter';
import { storeToRefs } from 'pinia';

export function useCounter() {
	const store = useCounterStore();
	const { count, level, progress, rank, comboMultiplier } = storeToRefs(store);
	const { increment, reset } = store;

	const mounted = ref(false);

	onMounted(() => {
		setTimeout(() => {
			mounted.value = true;
		}, 100);
	});

	// Calculate rotation for progress circle
	const strokeDashoffset = computed(() => {
		const circumference = 2 * Math.PI * 54; // radius = 54
		return circumference - (progress.value / 100) * circumference;
	});

	// Generate particles for click effect
	const createParticles = (x: number, y: number) => {
		const colors = ['#38bdf8', '#818cf8', '#c084fc'];
		for (let i = 0; i < 5; i++) {
			const particle = document.createElement('div');
			particle.classList.add('particle');
			document.body.appendChild(particle);

			const size = Math.random() * 8 + 4;
			const color = colors[Math.floor(Math.random() * colors.length)];
			const angle = Math.random() * Math.PI * 2;
			const velocity = Math.random() * 100 + 50;

			particle.style.width = `${size}px`;
			particle.style.height = `${size}px`;
			particle.style.background = color as string;
			particle.style.left = `${x}px`;
			particle.style.top = `${y}px`;

			const tx = Math.cos(angle) * velocity;
			const ty = Math.sin(angle) * velocity;

			particle.animate(
				[
					{ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
					{
						transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`,
						opacity: 0,
					},
				],
				{
					duration: 600,
					easing: 'cubic-bezier(0, .9, .57, 1)',
				},
			).onfinish = () => particle.remove();
		}
	};

	// Handle increment with particle effect
	const handleIncrement = (e: MouseEvent) => {
		increment();
		createParticles(e.clientX, e.clientY);
	};

	return {
		mounted,
		count,
		level,
		progress,
		rank,
		comboMultiplier,
		strokeDashoffset,
		handleIncrement,
		reset,
	};
}
