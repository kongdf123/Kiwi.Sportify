<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
</script>

<template>
	<div class="flex justify-between">
		<input
			placeholder="Search session"
			class="w-[320px] h-12 rounded-2xl bg-white px-5"
		/>

		<div class="flex gap-3">
			<BaseButton variant="secondary"> All </BaseButton>
			<BaseButton variant="ghost"> Running </BaseButton>
			<RouterLink to="/sessions/new">
				<BaseButton> New Session </BaseButton>
			</RouterLink>
		</div>
	</div>
</template>
