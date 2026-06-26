<script setup lang="ts">
import { computed, watch } from "vue";
import type { EChartsOption } from "echarts";
import { useEChart } from "@/hooks/useEChart";

const props = defineProps<{
    option: EChartsOption;

    height?: string;
}>();

const { el:_el, render } = useEChart();
const chartHeight = computed(() => props.height ?? "420px");

watch(
    () => props.option,

    (option) => {
        render(option);
    },

    {
        immediate: true,
        deep: true,
    },
);
</script>

<template>
    <div class="rounded-[24px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] p-6">
        <div ref="_el" :style="{
            height: chartHeight,
        }" class="w-full" />
    </div>
</template>
