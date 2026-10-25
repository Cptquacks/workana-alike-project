export type TipVariant = 'info' | 'success' | 'warning' | 'danger';
export type TipSize = 'sm' | 'md' | 'lg';

export interface TipProps {
	variant?: TipVariant;
	size?: TipSize;
	icon?: string;
}
