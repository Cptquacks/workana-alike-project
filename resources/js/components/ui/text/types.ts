export type TextVariant =
	'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'danger';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type TextTag = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps {
	variant?: TextVariant;
	size?: TextSize;
	tag?: TextTag;
	weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
	align?: 'left' | 'center' | 'right' | 'justify';
}
