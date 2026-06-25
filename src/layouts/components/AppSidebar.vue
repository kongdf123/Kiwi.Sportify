<template>
	<aside
		class="w-[280px] bg-white/80 backdrop-blur-xl border-r border-[var(--border)] flex flex-col"
	>
		<div class="px-8 py-8">
			<div class="flex items-center gap-4">
				<div
					class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg"
				/>

				<div>
					<div class="text-2xl font-semibold tracking-tight">
						Sportify
					</div>

					<div class="text-sm text-[var(--text-soft)]">
						Sports Science Platform
					</div>
				</div>
			</div>
		</div>

		<SidebarMenu />

		<div class="mt-auto p-8">
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

<script setup lang="ts">
import SidebarMenu from "./SidebarMenu.vue";
</script>
