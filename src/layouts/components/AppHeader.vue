<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import BaseButton from "@/shared/ui/BaseButton.vue";

const auth = useAuthStore();
const router = useRouter();

function logout() {
	auth.logout();

	router.replace("/login");
}
</script>

<template>
	<header class="h-[88px] bg-white border-b border-[var(--border)] px-8 flex justify-between items-center">
		<div> </div>

		<div class="flex items-center gap-4">
			<div>
				{{ auth.user?.name }}
			</div>

			<BaseButton variant="secondary" @click="logout">
				Logout
			</BaseButton>
		</div>
	</header>
</template>
