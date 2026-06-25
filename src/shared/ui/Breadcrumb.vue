<script setup lang="ts">
interface Item {
	label: string;

	path: string;
}

defineProps<{
	items: Item[];
}>();

// Usage
// <Breadcrumb
//     :items="[
//         {
//             label: 'Dashboard',

//             path: '/dashboard',
//         },

//         {
//             label: 'Analysis',

//             path: '/analysis',
//         },
//     ]"
// />

// Output:
// Dashboard / Analysis
</script>

<template>
	<nav class="flex items-center gap-2 text-sm">
		<template v-for="(item, index) in items" :key="item.path">
			<RouterLink
				:to="item.path"
				class="text-[var(--text-soft)] hover:text-[var(--text)]"
			>
				{{ item.label }}
			</RouterLink>

			<span v-if="index < items.length - 1"> / </span>
		</template>
	</nav>
</template>
