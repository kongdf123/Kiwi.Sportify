<script setup lang="ts">
import WorkspaceLayout from "@/layouts/WorkspaceLayout.vue";
import AnalysisSessionPanel from "./components/AnalysisSessionPanel.vue";
import AnalysisMetrics from "./components/AnalysisMetrics.vue";
import AnalysisChart from "./components/AnalysisChart.vue";
import AnalysisInsightCard from "./components/AnalysisInsightCard.vue";

import ForceCurve from "./components/ForceCurve.vue";
import VelocityCurve from "./components/VelocityCurve.vue";
import ReplayTimeline from "./components/ReplayTimeline.vue";
</script>

<template>
	<WorkspaceLayout>
		<template #sidebar>
			<AnalysisSessionPanel />
		</template>

		<template #toolbar> Analysis Workspace </template>

		<template #content>
			<div class="space-y-6">
				<AnalysisMetrics />

				<ForceCurve />
				<VelocityCurve />
				<ReplayTimeline />

				<!-- <AnalysisChart /> -->
			</div>
		</template>

		<template #inspector>
			<AnalysisInsightCard />
		</template>
	</WorkspaceLayout>
</template>
