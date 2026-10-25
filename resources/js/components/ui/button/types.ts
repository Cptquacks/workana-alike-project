export type ButtonVariant =
	'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'success' | 'password';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonRadius = 'xs' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps {
	variant?: ButtonVariant;
	togled?: boolean;
	size?: ButtonSize;
	radius?: ButtonRadius;
	icon?: string;
	loading?: boolean;
	disabled?: boolean;
	block?: boolean;
	to?: string | object;
	href?: string;
}
