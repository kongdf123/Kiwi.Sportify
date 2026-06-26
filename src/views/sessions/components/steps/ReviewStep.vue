<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
import BaseButton from "@/shared/ui/BaseButton.vue";

import { useSessionCreateStore } from "@/stores/session-create.store";

const store = useSessionCreateStore();

function submit() {
	store.submit();
}
</script>

<template>
	<div class="max-w-3xl mx-auto">
		<h1 class="text-4xl font-semibold">Review Session</h1>

		<BaseCard class="mt-8">
			<div class="space-y-5">
				<div>
					Athlete:
					{{ store.form.athlete.name }}
				</div>
				<div>
					Session Name:
					{{ store.form.sessionName }}
				</div>
				<div>
					Protocol:
					{{ store.form.protocolId }}
				</div>

				<div>
					Devices:
					{{ store.form.deviceIds.join(", ") }}
				</div>

				<div>
					Duration:
					{{ store.form.capture.duration }}
					min
				</div>

				<div>
					Sampling:
					{{ store.form.capture.samplingRate }}
					Hz
				</div>

				<div>
					Auto Stop:

					{{ store.form.capture.autoStop ? "Enabled" : "Disabled" }}
				</div>
			</div>
		</BaseCard>

		<div class="mt-10 flex justify-between">
			<BaseButton variant="secondary" @click="store.prev">
				Back
			</BaseButton>

			<BaseButton @click="submit"> Start Session </BaseButton>
		</div>
	</div>
</template>
