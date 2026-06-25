<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
</script>

<template>
	<div class="grid grid-cols-4 gap-5">
		<BaseCard>
			<div>Running</div>

			<div class="mt-3 text-5xl font-semibold">6</div>
		</BaseCard>

		<BaseCard>
			<div>Devices</div>

			<div class="mt-3 text-5xl font-semibold">24</div>
		</BaseCard>

		<BaseCard>
			<div>Capture</div>

			<div class="mt-3 text-5xl font-semibold">89%</div>
		</BaseCard>

		<BaseCard>
			<div>Completed</div>

			<div class="mt-3 text-5xl font-semibold">142</div>
		</BaseCard>
	</div>
</template>
