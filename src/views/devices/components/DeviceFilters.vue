<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
</script>

<template>
	<div class="flex gap-3">
		<BaseButton variant="secondary"> All </BaseButton>
		<BaseButton variant="ghost"> Online </BaseButton>
		<BaseButton variant="ghost"> Warning </BaseButton>
		<BaseButton variant="ghost"> Offline </BaseButton>
	</div>
</template>
