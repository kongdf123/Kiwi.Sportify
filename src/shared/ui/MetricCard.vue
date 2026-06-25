<script setup lang="ts">
defineProps<{
	title: string;

	value: string;

	change?: string;

	subtitle?: string;
}>();
</script>

<template>
	<div
		class="group rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-lg"
	>
		<div class="text-sm font-medium text-[var(--text-soft)]">
			{{ title }}
		</div>

		<div class="mt-5 flex items-end justify-between">
			<div>
				<div class="text-5xl font-semibold tracking-tight">
					{{ value }}
				</div>

				<div
					v-if="subtitle"
					class="mt-2 text-sm text-[var(--text-soft)]"
				>
					{{ subtitle }}
				</div>
			</div>

			<div
				v-if="change"
				class="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600"
			>
				{{ change }}
			</div>
		</div>
	</div>
</template>
