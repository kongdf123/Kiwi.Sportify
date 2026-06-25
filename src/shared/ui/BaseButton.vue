<script setup lang="ts">
import { Primitive } from "reka-ui";
import { computed } from "vue";

interface Props {
	variant?: "default" | "secondary" | "ghost";
	disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	variant: "default",
	disabled: false,
});

const classes = computed(
	() =>
		({
			default: `bg-[var(--primary)] text-white hover:brightness-110`,
			secondary: `bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]`,

			ghost: `bg-transparent hover:bg-slate-100`,
		})[props.variant],
);
</script>

<template>
	<Primitive as="button" :disabled="disabled" :class="[
		`inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[var(--radius)] font-medium transition duration-200 disabled:opacity-50
 disabled:pointer-events-none`,
		classes,
	]">
		<slot />
	</Primitive>
</template>
