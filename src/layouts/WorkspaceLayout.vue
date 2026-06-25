<template>
	<div class="h-screen grid grid-cols-[320px_1fr_340px] grid-rows-[88px_1fr]">
		<div class="col-span-3">
			<WorkspaceToolbar />
		</div>

		<div class="border-r">
			<slot name="sidebar" />
		</div>

		<div class="overflow-auto p-8">
			<slot name="content" />
		</div>

		<div class="border-l">
			<slot name="inspector" />
		</div>
	</div>
</template>

<script setup lang="ts">
import WorkspaceToolbar from "./components/WorkspaceToolbar.vue";
</script>
