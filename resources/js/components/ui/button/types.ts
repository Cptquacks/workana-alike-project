export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  to?: string | object;
  href?: string;
}
