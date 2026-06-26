<script setup lang="ts">
import BaseButton from "@/shared/ui/BaseButton.vue";
import { useSessionCreateStore } from "@/stores/session-create.store";

const store = useSessionCreateStore();
</script>

<template>
	<div class="max-w-3xl mx-auto">
		<h1 class="text-4xl font-semibold">Capture Configuration</h1>

		<div class="mt-10 space-y-6">
			<div>
				<label> Duration (min) </label>

				<input
					v-model.number="store.form.capture.duration"
					type="number"
					class="mt-2 w-full h-12 rounded-xl border px-4"
				/>
			</div>

			<div>
				<label> Sampling Rate (Hz) </label>

				<input
					v-model.number="store.form.capture.samplingRate"
					type="number"
					class="mt-2 w-full h-12 rounded-xl border px-4"
				/>
			</div>

			<label class="flex gap-3">
				<input v-model="store.form.capture.autoStop" type="checkbox" />

				Auto Stop
			</label>
		</div>

		<div class="mt-10 flex justify-between">
			<BaseButton variant="secondary" @click="store.prev">
				Back
			</BaseButton>

			<BaseButton @click="store.next"> Continue </BaseButton>
		</div>
	</div>
</template>
