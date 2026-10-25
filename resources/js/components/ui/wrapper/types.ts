export type WrapperType = 'square' | 'rounded' | 'bar';

export interface WrapperProps {
	form?: WrapperType;
	type?: 'primary' | 'secondary' | 'tertiary';

	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'fit' | 'full';
	maxHeight?: 'sm' | 'md' | 'lg' | 'xl' | 'fit' | 'full';
	padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	centered?: boolean;
	flexRow?: boolean;
}
