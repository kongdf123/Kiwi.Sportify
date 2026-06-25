<template>
	<nav class="px-5 space-y-2">
		<RouterLink
			v-for="item in items"
			:key="item.path"
			:to="item.path"
			class="group flex items-center gap-4 px-5 py-4 rounded-2xl transition"
			active-class="bg-blue-50shadow-sm"
		>
			<div
				class="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center"
			>
				{{ item.icon }}
			</div>

			<div>
				<div class="font-medium">
					{{ item.label }}
				</div>

				<div class="text-xs text-slate-500">
					{{ item.desc }}
				</div>
			</div>
		</RouterLink>
	</nav>
</template>

<script setup lang="ts">
const items = [
	{
		icon: "⌂",
		label: "Dashboard",
		desc: "Overview",
		path: "/dashboard",
	},

	{
		icon: "🏃",
		label: "Athletes",
		desc: "Performance",
		path: "/athletes",
	},

	{
		icon: "📡",
		label: "Devices",
		desc: "Sensors",
		path: "/devices",
	},

	{
		icon: "🎬",
		label: "Sessions",
		desc: "Capture",
		path: "/sessions",
	},

	{
		icon: "📈",
		label: "Analysis",
		desc: "Insights",
		path: "/analysis",
	},

	{
		icon: "📄",
		label: "Reports",
		desc: "Export",
		path: "/reports",
	},
];
</script>
