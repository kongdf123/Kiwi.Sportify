<script setup lang="ts">
import AthleteStats from "./components/AthleteStats.vue";
import AthleteSearch from "./components/AthleteSearch.vue";
import AthleteFilters from "./components/AthleteFilters.vue";
import AthleteCard from "./components/AthleteCard.vue";
import { useAthleteStore } from "@/stores/athlete.store";

const store = useAthleteStore();
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-4xl font-semibold">Athletes</h1>

			<div class="text-[var(--text-soft)] mt-2">
				Monitor performance and recovery
			</div>
		</div>

		<AthleteStats />

		<div class="flex gap-4">
			<AthleteSearch />
			<AthleteFilters />
		</div>

		<div class="grid grid-cols-3 gap-6">
			<AthleteCard
				v-for="item in store.athletes"
				:key="item.id"
				:athlete="item"
			/>
		</div>
	</div>
</template>
