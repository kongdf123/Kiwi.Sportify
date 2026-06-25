export type SessionStatus = "ready" | "capturing" | "processing" | "completed";

export interface Session {
	id: string;

	title: string;

	athlete: string;

	devices: number;

	duration: string;

	status: SessionStatus;

	updatedAt: string;
}
