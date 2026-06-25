<script setup lang="ts">
import type { SessionStatus } from "@/types/session";

defineProps<{
	status: SessionStatus;
}>();

const colors = {
	ready: "bg-slate-400",
	capturing: "bg-emerald-500",
	processing: "bg-blue-500",
	completed: "bg-indigo-500",
};
</script>

<template>
	<div class="flex items-center gap-2">
		<div :class="['w-2 h-2 rounded-full', colors[status]]" />

		<div class="capitalize text-sm">
			{{ status }}
		</div>
	</div>
</template>
