import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const clicks = ref(0);
	const highestStreak = ref(0);
	const lastClickTime = ref(0);
	const comboMultiplier = ref(1);

	const level = computed(() => Math.floor(count.value / 10) + 1);
	const progress = computed(() => (count.value % 10) * 10); // 0 to 100%

	const rank = computed(() => {
		if (count.value < 10) return 'Novice Clicker';
		if (count.value < 50) return 'Finger Sprinter';
		if (count.value < 100) return 'Mouse Master';
		if (count.value < 500) return 'Click God';
		return 'Transcendent';
	});

	function increment() {
		const now = Date.now();

		if (now - lastClickTime.value < 1000) {
			comboMultiplier.value = Math.min(comboMultiplier.value + 0.1, 5);
		} else {
			comboMultiplier.value = 1;
		}

		const incrementValue = Math.ceil(1 * comboMultiplier.value);
		count.value += incrementValue;
		clicks.value++;
		lastClickTime.value = now;

		if (count.value > highestStreak.value) {
			highestStreak.value = count.value;
		}
	}

	function decrement() {
		if (count.value > 0) {
			count.value--;
		}
	}

	function reset() {
		count.value = 0;
		comboMultiplier.value = 1;
	}

	return {
		count,
		clicks,
		level,
		progress,
		rank,
		comboMultiplier,
		increment,
		decrement,
		reset,
	};
});
