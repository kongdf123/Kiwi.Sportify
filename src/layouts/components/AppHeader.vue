<template>
	<header
		class="h-18 bg-white border-b px-8 flex items-center justify-between"
	>
		<div>
			<h1 class="font-semibold text-xl">Dashboard</h1>
		</div>

		<div class="flex gap-3">
			<BaseButton> Export </BaseButton>
			<BaseButton> Profile </BaseButton>
		</div>
	</header>
</template>

<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
</script>
