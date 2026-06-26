import type { Athlete } from "./athlete";

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

export interface SessionCreate {
	athleteId: string;
	athlete: Athlete;

	protocolId: string;

	deviceIds: string[];

	sessionName: string;

	notes: string;

	capture: {
		duration: number;

		samplingRate: number;

		autoStop: boolean;
	};
}
export interface LiveSession {
	id: string;

	status: "RUNNING" | "PAUSED" | "COMPLETED";

	elapsed: number;

	deviceConnected: boolean;
}
