export interface store {
	id: number;
	user_id: number;
	cover_image: string;
	name: string;
	description?: string;
	days_open: Array;
	open_time: string;
	closing_time: string;
	rate: number;
	visibility: number;
}
