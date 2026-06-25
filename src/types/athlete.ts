export interface Athlete {
	id: string;

	name: string;

	sport: string;

	status: "ready" | "training" | "recovery";

	recovery: number;

	sessions: number;

	avatar: string;
}
