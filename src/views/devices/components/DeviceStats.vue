<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
</script>

<template>
	<div class="grid grid-cols-4 gap-5">
		<BaseCard>
			Online

			<div class="mt-4 text-5xl font-semibold">24</div>
		</BaseCard>

		<BaseCard>
			Signal

			<div class="mt-4 text-5xl font-semibold">95%</div>
		</BaseCard>

		<BaseCard>
			Capture

			<div class="mt-4 text-5xl font-semibold">Running</div>
		</BaseCard>

		<BaseCard>
			Battery

			<div class="mt-4 text-5xl font-semibold">88%</div>
		</BaseCard>
	</div>
</template>
