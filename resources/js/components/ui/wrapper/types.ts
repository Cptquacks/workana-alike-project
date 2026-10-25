export type WrapperType = 'square' | 'rounded' | 'bar';

export interface WrapperProps {
	form?: WrapperType;
	type?: 'primary' | 'secondary' | 'tertiary';

	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit' | 'full';
	maxHeight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit' | 'full';
	padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	centered?: boolean;
	flexRow?: boolean;
}
