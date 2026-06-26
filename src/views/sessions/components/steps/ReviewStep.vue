<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseCard from "@/shared/ui/BaseCard.vue";
import BaseButton from "@/shared/ui/BaseButton.vue";

import { useSessionCreateStore } from "@/stores/session-create.store";
import { useSessionLiveStore } from "@/stores/session-live.store";

const createStore = useSessionCreateStore();
const liveStore = useSessionLiveStore();

// function submit() {
// 	store.submit();
// }

const router = useRouter();

async function submit() {
	const id = await liveStore.start();

	router.push(`/sessions/${id}/live`);
}
</script>

<template>
	<div class="max-w-3xl mx-auto">
		<h1 class="text-4xl font-semibold">Review Session</h1>

		<BaseCard class="mt-8">
			<div class="space-y-5">
				<div>
					Athlete:
					{{ createStore.form.athlete.name }}
				</div>
				<div>
					Session Name:
					{{ createStore.form.sessionName }}
				</div>
				<div>
					Protocol:
					{{ createStore.form.protocolId }}
				</div>

				<div>
					Devices:
					{{ createStore.form.deviceIds.join(", ") }}
				</div>

				<div>
					Duration:
					{{ createStore.form.capture.duration }}
					min
				</div>

				<div>
					Sampling:
					{{ createStore.form.capture.samplingRate }}
					Hz
				</div>

				<div>
					Auto Stop:

					{{
						createStore.form.capture.autoStop
							? "Enabled"
							: "Disabled"
					}}
				</div>
			</div>
		</BaseCard>

		<div class="mt-10 flex justify-between">
			<BaseButton variant="secondary" @click="createStore.prev">
				Back
			</BaseButton>

			<BaseButton @click="submit"> Start Session </BaseButton>
		</div>
	</div>
</template>
