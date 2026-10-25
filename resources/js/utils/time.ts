export function timeToMinutes(time: string): number {
	const [h, m] = time.split(':').map(Number);
	return (h ?? 0) * 60 + (m ?? 0);
}

export function isStoreOpen(openTime: string, closingTime: string, daysOpen: string[]): boolean {
	const now = new Date();

	// 1. ¿Hoy es día de apertura?
	const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	const today = dayNames[now.getDay()];
	if (!daysOpen.includes(today ?? 'err')) return false;

	// 2. Comparar solo la hora (fecha ignorada por completo)
	const nowMinutes = now.getHours() * 60 + now.getMinutes();
	const openMinutes = timeToMinutes(openTime);
	const closeMinutes = timeToMinutes(closingTime);

	// 3. Caso nocturno: abre 22:00, cierra 02:00
	if (openMinutes > closeMinutes) {
		return nowMinutes >= openMinutes || nowMinutes <= closeMinutes;
	}

	// 4. Caso normal: 09:00 - 18:00
	return nowMinutes >= openMinutes && nowMinutes <= closeMinutes;
}
