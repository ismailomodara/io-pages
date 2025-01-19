<template>
    <!-- General Settings -->
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
import { ref } from "vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";

const settings = ref({
    font: "Figtree",
    paddingX: 40,
    paddingY: 40,
})

function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}
</script>

<style lang="scss" scoped></style>

