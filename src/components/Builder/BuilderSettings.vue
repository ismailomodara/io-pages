<template>
    <BuilderSection title="General">
        <div class="flex flex-col mb-3">
            <label class="text-sm mb-1">Font Family</label>
            <select v-model="settings.font" class="border-gray-300">
                <option value="Figtree">Figtree</option>
                <option value="Verdana">Verdana</option>
                <option value="Inter">Inter</option>
            </select>
        </div>
        <div class="flex flex-col mb-3">
            <label class="text-sm color-danger-500">Padding X</label>
            <input type="number" v-model="settings.paddingX" />
        </div>
        <div class="flex flex-col">
            <label class="text-sm color-danger-500">Padding Y</label>
            <input type="number" v-model="settings.paddingY" />
        </div>
    </BuilderSection>
</template>

<script setup>
import {ref, watch} from "vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";

import { useAppStore } from "@/stores/app.ts";
const store = useAppStore();

const settings = ref({
    font: store.page.font,
    paddingX: store.page.paddingX,
    paddingY: store.page.paddingY
})

watch(settings, () => {
    store.updatePageData(settings.value);
}, { deep: true })
</script>

<style lang="scss" scoped></style>

