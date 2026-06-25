import { defineStore } from "pinia";

interface AppState {
	initialized: boolean;
}

export const useAppStore = defineStore(
	"app",

	{
		state: (): AppState => ({
			initialized: false,
		}),

		actions: {
			initialize() {
				this.initialized = true;
			},
		},
	},
);

// Usage example:
// import { useAppStore } from "@/stores/app.store";
// const appStore = useAppStore();
// appStore.initialize();
