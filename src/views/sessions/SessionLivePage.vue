<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import BaseCard from "@/shared/ui/BaseCard.vue";
import BaseButton from "@/shared/ui/BaseButton.vue";
import { useSessionLiveStore } from "@/stores/session-live.store";

const store = useSessionLiveStore();
const running = computed(() => store.status === "RUNNING");

const router = useRouter();

function toggle() {
	running.value ? store.pause() : store.resume();
}

function stop() {
	store.stop();

	router.push("/analysis");
}
</script>

<template>
	<div class="p-8 space-y-8">
		<div class="flex justify-between">
			<div>
				<h1 class="text-4xl font-bold">Live Session</h1>

				<div class="text-slate-500">
					{{ store.athlete }}
				</div>
			</div>

			<div class="text-5xl font-mono">
				{{ store.formattedTime }}
			</div>
		</div>

		<div class="grid grid-cols-3 gap-6">
			<BaseCard>
				Force

				<div class="text-5xl">
					{{ Math.round(store.force) }}
				</div>
			</BaseCard>

			<BaseCard>
				Velocity

				<div class="text-5xl">
					{{ store.velocity.toFixed(1) }}
				</div>
			</BaseCard>

			<BaseCard>
				Heart Rate

				<div class="text-5xl">
					{{ Math.round(store.heartRate) }}
				</div>
			</BaseCard>
		</div>

		<BaseCard>
			<div class="text-lg font-semibold">Devices</div>

			<div class="mt-5 space-y-4">
				<div
					v-for="d in store.devices"
					:key="d.id"
					class="flex justify-between"
				>
					<div>
						{{ d.name }}
					</div>

					<div>
						{{ d.connected ? "🟢" : "🔴" }}
					</div>
				</div>
			</div>
		</BaseCard>

		<div class="flex gap-4">
			<BaseButton @click="toggle">
				{{ running ? "Pause" : "Resume" }}
			</BaseButton>

			<BaseButton variant="secondary" @click="stop">
				Stop Session
			</BaseButton>
		</div>
	</div>
</template>
