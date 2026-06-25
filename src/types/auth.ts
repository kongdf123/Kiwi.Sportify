export interface User {
	id: string;
	name: string;
	email: string;
	role: "admin" | "coach" | "scientist";
}

export interface AuthState {
	token: string | null;
	user: User | null;
}
