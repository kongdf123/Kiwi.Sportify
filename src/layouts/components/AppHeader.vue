<template>
	<header
		class="h-[88px] bg-white/70 backdrop-blur-xl border-b border-[var(--border)] px-10 flex items-center justify-between"
	>
		<div>
			<div class="text-3xl font-semibold">
				<!-- Dashboard -->
			</div>

			<div class="text-sm text-[var(--text-soft)]">
				<!-- Realtime sports performance -->
			</div>
		</div>

		<div class="flex items-center gap-4">
			<div
				class="w-[280px] bg-[var(--surface-soft)] rounded-2xl px-5 py-3"
			>
				Search athletes
			</div>

			<BaseButton> New Session </BaseButton>

			<div
				class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
</script>
