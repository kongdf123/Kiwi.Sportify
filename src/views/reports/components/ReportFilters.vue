<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
</script>

<template>
	<div class="flex gap-3">
		<BaseButton> Week </BaseButton>

		<BaseButton variant="ghost"> Month </BaseButton>

		<BaseButton variant="ghost"> Quarter </BaseButton>
	</div>
</template>
