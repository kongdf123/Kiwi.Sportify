import type { Router } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

export function setupAuthGuard(router: Router) {
	router.beforeEach((to) => {
		const auth = useAuthStore();

		if (to.path !== "/login" && !auth.isLoggedIn) {
			return "/login";
		}

		if (to.path === "/login" && auth.isLoggedIn) {
			return "/dashboard";
		}
	});
}
