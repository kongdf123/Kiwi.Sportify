<script setup lang="ts">
import { useRouter } from "vue-router";

import BaseButton from "@/shared/ui/BaseButton.vue";

const router = useRouter();

function goHome() {
	router.push("/dashboard");
}
</script>

<template>
	<header
		class="h-[88px] bg-[var(--surface)] border-b border-[var(--border)] px-8 flex items-center justify-between"
	>
		<div class="flex items-center gap-6">
			<button
				@click="goHome"
				class="w-10 h-10 rounded-xl hover:bg-slate-100 transition"
			>
				←
			</button>

			<div>
				<div class="text-sm text-[var(--text-soft)]">Sportify</div>

				<div class="text-2xl font-semibold">Analysis Workspace</div>
			</div>
		</div>

		<div class="flex items-center gap-3">
			<BaseButton variant="secondary"> Compare </BaseButton>

			<BaseButton> Export </BaseButton>
		</div>
	</header>
</template>
