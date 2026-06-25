<template>
	<nav class="p-4">
		<RouterLink
			v-for="item in items"
			:key="item.path"
			:to="item.path"
			class="flex items-center gap-3 px-4 py-3 rounded-xl mb-2 hover:bg-slate-100"
			active-class="bg-blue-50 text-blue-700"
		>
			<span>
				{{ item.icon }}
			</span>

			<span>
				{{ item.label }}
			</span>
		</RouterLink>
	</nav>
</template>

<script setup lang="ts">
const items = [
	{
		icon: "⌂",
		label: "Dashboard",
		path: "/dashboard",
	},
	{
		icon: "🏃",
		label: "Athletes",
		path: "/athletes",
	},
	{
		icon: "📡",
		label: "Devices",
		path: "/devices",
	},
	{
		icon: "🎬",
		label: "Sessions",
		path: "/sessions",
	},
	{
		icon: "📈",
		label: "Analysis",
		path: "/analysis",
	},
	{
		icon: "📄",
		label: "Reports",
		path: "/reports",
	},
];
</script>
