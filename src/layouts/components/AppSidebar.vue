<script setup lang="ts">
import SidebarMenu from "./SidebarMenu.vue";
import type { SidebarItem } from "@/types/sidebar";

const menus: SidebarItem[] = [
	{
		label: "Dashboard",
		icon: "🏠",
		to: "/dashboard",
	},

	{
		label: "Athletes",
		icon: "🏃",
		to: "/athletes",
	},

	{
		label: "Devices",
		icon: "⌚",
		to: "/devices",
	},

	{
		label: "Sessions",
		icon: "🎯",
		to: "/sessions",
	},

	{
		label: "Analysis",
		icon: "📈",
		to: "/analysis",
	},

	{
		label: "Reports",
		icon: "📄",
		to: "/reports",
	},
];
</script>

<template>
	<aside
		class="h-full flex flex-col bg-[var(--sidebar)] border-r border-[var(--border)]"
	>
		<div class="px-6 py-8">
			<div class="text-2xl font-bold tracking-wide">SPORTIFY</div>

			<div class="mt-1 text-sm text-[var(--text-soft)]">
				Sports Science Platform
			</div>
		</div>

		<SidebarMenu :items="menus" />
		<div class="mt-auto p-5">
			<div
				class="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white"
			>
				<div class="font-semibold">24 Devices Online</div>

				<div class="mt-2 text-sm opacity-80">
					Realtime telemetry active
				</div>
			</div>
		</div>
	</aside>
</template>
