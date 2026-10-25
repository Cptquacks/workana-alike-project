import { useRoute } from 'vue-router';

export function getRouteParam(paramName: string): string | null;
export function getRouteParam(paramName: string, parser: 'number'): number | null;
export function getRouteParam(paramName: string, parser: 'boolean'): boolean | null;
export function getRouteParam<T>(paramName: string, parser: (value: string) => T): T | null;
export function getRouteParam<T = string>(
	paramName: string,
	parser?: 'number' | 'boolean' | ((value: string) => T),
): string | number | boolean | T | null {
	const route = useRoute();
	const param = route.params[paramName];

	if (!param) return null;

	const value = Array.isArray(param) ? param[0] : param;
	if (!value) return null;

	if (!parser) return value;

	if (parser === 'number') {
		const num = Number(value);
		return isNaN(num) ? null : num;
	}

	if (parser === 'boolean') {
		return (value === 'true' || value === '1') as boolean;
	}

	try {
		return parser(value);
	} catch {
		return null;
	}
}
