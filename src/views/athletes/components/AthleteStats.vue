<template>
	<div class="grid grid-cols-4 gap-5">
		<BaseCard>
			<div class="text-sm text-slate-500">Total</div>
			<div class="text-4xl mt-3 font-semibold">87</div>
		</BaseCard>

		<BaseCard>
			<div>Ready</div>
			<div class="text-4xl mt-3">62</div>
		</BaseCard>

		<BaseCard>
			<div>Training</div>
			<div class="text-4xl mt-3">18</div>
		</BaseCard>

		<BaseCard>
			<div>Recovery</div>
			<div class="text-4xl mt-3">7</div>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
</script>
