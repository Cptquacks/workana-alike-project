import type { store } from './stores';

export interface user {
	id: number;
	name: string;
	email: string;
	stores?: store[];
}

export interface storePayload {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export interface authPayload {
	email: string;
	password: string;
}
