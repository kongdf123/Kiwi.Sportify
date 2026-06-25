import { defineStore } from "pinia";

type Theme = "light" | "dark";

export const useThemeStore = defineStore(
	"theme",
	{
		state: () => ({
			theme: "light" as Theme,
		}),
		actions: {
			toggle() {
				this.theme = this.theme === "light" ? "dark" : "light";
			},
		},
	},
);

// Usage example:
// import { useThemeStore } from "@/stores/theme.store";
// const themeStore = useThemeStore();
// themeStore.toggle();