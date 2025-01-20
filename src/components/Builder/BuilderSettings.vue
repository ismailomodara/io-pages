<template>
    <BuilderSection title="General">
        <div class="flex flex-col mb-3">
            <label class="text-sm text-gray-600 mb-1">Font family</label>
            <select v-model="settings.font" class="border-gray-300">
                <option value="Figtree">Figtree</option>
                <option value="Verdana">Verdana</option>
                <option value="Inter">Inter</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Courier">Courier</option>
            </select>
        </div>
        <div class="flex flex-col mb-3">
            <label class="text-sm text-gray-600">Padding X (px)</label>
            <input type="number" v-model="settings.paddingX" min="0" />
        </div>
        <div class="flex flex-col">
            <label class="text-sm text-gray-600">Padding Y (px)</label>
            <input type="number" v-model="settings.paddingY" min="0" />
        </div>
    </BuilderSection>
</template>

<script setup>
import { ref, watch } from "vue";
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


