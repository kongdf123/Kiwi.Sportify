<template>
	<aside
		class="w-72 bg-[var(--surface)] border-r border-slate-200 flex flex-col shrink-0"
	>
		<div class="h-18 px-6 flex items-center border-b">
			<div>
				<div class="text-xl font-semibold">Sportify</div>
				<div class="text-xs text-slate-500">Sports Science Center</div>
			</div>
		</div>

		<SidebarMenu />

		<div class="mt-auto p-6 border-t text-sm text-slate-500">v0.1</div>
	</aside>
</template>

<script setup lang="ts">
import SidebarMenu from "./SidebarMenu.vue";
</script>
