<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
import BaseButton from "@/shared/ui/BaseButton.vue";
import SessionStatus from "./SessionStatus.vue";
import type { Session } from "@/types/session";

defineProps<{
	session: Session;
}>();
</script>

<template>
	<BaseCard>
		<div class="flex justify-between">
			<div>
				<div class="text-xl font-semibold">
					{{ session.title }}
				</div>

				<div class="text-slate-500 mt-1">
					{{ session.athlete }}
				</div>
			</div>

			<SessionStatus :status="session.status" />
		</div>

		<div class="mt-8 grid grid-cols-3">
			<div>
				<div class="text-sm text-slate-500">Devices</div>

				<div class="text-3xl font-semibold">
					{{ session.devices }}
				</div>
			</div>

			<div>
				<div>Duration</div>

				<div class="text-2xl font-semibold">
					{{ session.duration }}
				</div>
			</div>

			<div>
				<div>Updated</div>

				<div>
					{{ session.updatedAt }}
				</div>
			</div>
		</div>

		<div class="mt-8 flex justify-end gap-3">
			<BaseButton variant="secondary"> Replay </BaseButton>

			<BaseButton> Open </BaseButton>
		</div>
	</BaseCard>
</template>
