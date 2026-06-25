<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import BaseButton from "@/shared/ui/BaseButton.vue";

const router = useRouter();
const auth = useAuthStore();

const form = reactive({
	email: "",
	password: "",
});

async function login() {
	auth.login(
		form.email,
		form.password,
	);

	router.replace("/dashboard");
}
</script>

<template>
	<section class="flex items-center justify-center bg-[var(--surface)]">
		<div class="w-[460px]">
			<div class="text-4xl font-semibold">Welcome Back</div>

			<div class="mt-2 text-[var(--text-soft)]">Sign in to continue</div>

			<form class="mt-10 space-y-6" @submit.prevent="login">
				<div>
					<label> Email </label>

					<input
						v-model="form.email"
						class="mt-2 w-full h-14 rounded-2xl border px-5"
					/>
				</div>

				<div>
					<label> Password </label>

					<input
						type="password"
						v-model="form.password"
						class="mt-2 w-full h-14 rounded-2xl border px-5"
					/>
				</div>

				<div class="flex justify-between text-sm">
					<label>
						<input type="checkbox" />

						Remember me
					</label>

					<button>Forgot password</button>
				</div>

				<BaseButton class="w-full h-14"> Sign In </BaseButton>
			</form>
		</div>
	</section>
</template>
