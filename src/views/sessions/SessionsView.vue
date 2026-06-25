<script setup lang="ts">
import SessionStats from "./components/SessionStats.vue";
import SessionToolbar from "./components/SessionToolbar.vue";
import SessionCard from "./components/SessionCard.vue";
import { useSessionStore } from "@/stores/session.store";

const store = useSessionStore();
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-4xl font-semibold">Sessions</h1>

			<div class="mt-2 text-[var(--text-soft)]">
				Realtime capture and workflow
			</div>
		</div>

		<SessionStats />
		<SessionToolbar />

		<div class="grid grid-cols-2 gap-6">
			<SessionCard
				v-for="item in store.sessions"
				:key="item.id"
				:session="item"
			/>
		</div>
	</div>
</template>
