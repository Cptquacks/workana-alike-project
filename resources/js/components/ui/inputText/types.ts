export type InputType = 'text' | 'text-box' | 'email' | 'password';
export interface InputProps {
	type?: InputType;
	icon?: string;
	placeholder?: string;
	minLength?: number;
	errorCaption?: string;
	throwError?:boolean
}
