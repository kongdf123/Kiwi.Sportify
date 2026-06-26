<script setup lang="ts">
const labels = ["Athlete", "Protocol", "Devices", "Capture", "Review"];
</script>

<template>
	<div class="mb-12 flex justify-center gap-8">
		<div
			v-for="(step, index) in labels"
			:key="step"
			class="flex items-center gap-3"
		>
			<div
				class="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center"
			>
				{{ index + 1 }}
			</div>

			<div>
				{{ step }}
			</div>
		</div>
	</div>
</template>
