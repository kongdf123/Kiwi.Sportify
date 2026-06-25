<script setup lang="ts">
import { useRoute } from "vue-router";
import type { SidebarItem } from "@/types/sidebar";

const props = defineProps<{
	items: SidebarItem[];
}>();

const route = useRoute();

function isActive(path: string) {
	return route.path === path || route.path.startsWith(path + "/");
}
</script>

<template>
	<nav class="px-3 space-y-2">
		<RouterLink
			v-for="item in items"
			:key="item.to"
			:to="item.to"
			class="group relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200"
			:class="
				isActive(item.to)
					? [
							'bg-gradient-to-r',
							'from-blue-600',
							'to-indigo-600',
							'text-white',
							'shadow-lg',
						]
					: ['text-[var(--text)]', 'hover:bg-slate-100']
			"
		>
			<div class="text-xl opacity-90">
				{{ item.icon }}
			</div>

			<div class="font-medium">
				{{ item.label }}
			</div>

			<div
				v-if="isActive(item.to)"
				class="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-cyan-300"
			/>
		</RouterLink>
	</nav>
</template>
