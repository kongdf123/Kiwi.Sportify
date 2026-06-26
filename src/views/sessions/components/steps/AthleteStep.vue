<script setup lang="ts">
import { ref, computed } from "vue";
import BaseCard from "@/shared/ui/BaseCard.vue";
import { useSessionCreateStore } from "@/stores/session-create.store";
import type { Athlete } from "@/types/athlete";

// interface Athlete {
// 	id: string;

// 	name: string;

// 	sport: string;

// 	team: string;

// 	avatar: string;
// }

const store = useSessionCreateStore();

const keyword = ref("");

const athletes: Athlete[] = [
	{
        id: "1",

        name: "Emma Carter",

        sport: "Track",

        team: "Elite Team",

        avatar: "EC",
        status: "ready",
        recovery: 0,
        sessions: 0
    },

	{
        id: "2",

        name: "Ryan Lee",

        sport: "Basketball",

        team: "Performance Lab",

        avatar: "RL",
        status: "ready",
        recovery: 0,
        sessions: 0
    },

	{
        id: "3",

        name: "Olivia White",

        sport: "Football",

        team: "National Squad",

        avatar: "OW",
        status: "ready",
        recovery: 0,
        sessions: 0
    },

	{
        id: "4",

        name: "Noah Kim",

        sport: "Cycling",

        team: "Velocity Team",

        avatar: "NK",
        status: "ready",
        recovery: 0,
        sessions: 0
    },
];

const filtered = computed(() => {
	if (!keyword.value) {
		return athletes;
	}

	return athletes.filter((v) =>
		v.name
			.toLowerCase()
			.includes(keyword.value.toLowerCase()),
	);
});

async function selectAthlete(athlete: Athlete) {
	store.form.athlete = athlete;
	store.form.athleteId = athlete.id;

	// Smooth selection feedback

	await new Promise((resolve) => setTimeout(resolve, 350));

	store.next();
}
</script>

<template>
	<div class="max-w-6xl mx-auto">
		<div>
			<h1 class="text-4xl font-semibold">Choose Athlete</h1>

			<p class="mt-2 text-[var(--text-soft)]">
				Select participant for this session
			</p>
		</div>

		<input
			v-model="keyword"
			placeholder="
Search athlete...
"
			class="mt-8 w-full h-14 rounded-2xl border border-[var(--border)] bg-white px-6 outline-none transition focus:ring-2 focus:ring-blue-500"
		/>

		<div class="mt-8 grid grid-cols-2 gap-6">
			<BaseCard
				v-for="athlete in filtered"
				:key="athlete.id"
				@click="selectAthlete(athlete)"
				class="cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"
			>
				<div class="flex items-center gap-5">
					<div
						class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white grid place-items-center font-semibold text-xl"
					>
						{{ athlete.avatar }}
					</div>

					<div>
						<div class="text-lg font-semibold">
							{{ athlete.name }}
						</div>

						<div class="mt-1 text-sm text-[var(--text-soft)]">
							{{ athlete.sport }}
						</div>

						<div class="mt-1 text-sm text-[var(--text-soft)]">
							{{ athlete.team }}
						</div>
					</div>
				</div>
			</BaseCard>
		</div>

		<div
			v-if="filtered.length === 0"
			class="mt-16 text-center text-[var(--text-soft)]"
		>
			No athlete found
		</div>
	</div>
</template>
