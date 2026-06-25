<script setup lang="ts">
import { Primitive } from "reka-ui";

interface Props {
	variant?: "default";
}

withDefaults(
	defineProps<Props>(),
	{
		variant: "default",
	},
);
</script>

<template>
	<Primitive
		as="button"
		class="h-10 px-4 rounded-xl bg-blue-600 text-white hover:opacity-90 transition"
	>
		<slot />
	</Primitive>
</template>
