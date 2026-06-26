<script setup lang="ts">
import SessionStepper from "./components/SessionStepper.vue";
import AthleteStep from "./components/steps/AthleteStep.vue";
import ProtocolStep from "./components/steps/ProtocolStep.vue";
import DeviceStep from "./components/steps/DeviceStep.vue";
import CaptureStep from "./components/steps/CaptureStep.vue";
import ReviewStep from "./components/steps/ReviewStep.vue";

import { computed } from "vue";
import { useSessionCreateStore } from "@/stores/session-create.store";

const store = useSessionCreateStore();

const component = computed(() => {
	return [AthleteStep, ProtocolStep, DeviceStep, CaptureStep, ReviewStep][
		store.step
	];
});
</script>

<template>
	<div class="min-h-screen bg-[var(--background)] p-10">
		<SessionStepper />

		<component :is="component" />
	</div>
</template>
