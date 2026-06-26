<script setup lang="ts">
import BaseCard from "@/shared/ui/BaseCard.vue";
import BaseButton from "@/shared/ui/BaseButton.vue";

import { useSessionCreateStore } from "@/stores/session-create.store";

const store = useSessionCreateStore();
</script>

<template>
	<div class="max-w-5xl mx-auto">
		<h1 class="text-4xl font-semibold">Choose Protocol</h1>

		<div class="mt-8 grid grid-cols-3 gap-6">
			<BaseCard
				v-for="item in store.protocols"
				:key="item.id"
				@click="store.form.protocolId = item.id"
				class="cursor-pointer"
				:class="{
					'ring-2 ring-blue-600': store.form.protocolId === item.id,
				}"
			>
				<div class="text-xl font-semibold">
					{{ item.name }}
				</div>

				<div class="mt-2 text-slate-500">
					{{ item.description }}
				</div>
			</BaseCard>
		</div>

		<div class="mt-10 flex justify-between">
			<BaseButton variant="secondary" @click="store.prev">
				Back
			</BaseButton>
			<BaseButton @click="store.next"> Continue </BaseButton>
		</div>
	</div>
</template>
