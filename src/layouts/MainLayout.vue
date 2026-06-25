<template>
	<div
		class="h-screen flex bg-[var(--bg)] text-[var(--text)] overflow-hidden"
	>
		<AppSidebar />

		<div class="flex flex-1 flex-col min-w-0">
			<AppHeader />
			<AppContent>
				<router-view />
			</AppContent>
		</div>
	</div>
</template>

<script setup lang="ts">
import AppSidebar from "./components/AppSidebar.vue";
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";
</script>
