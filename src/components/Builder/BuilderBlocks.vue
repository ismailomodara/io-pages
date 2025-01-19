<template>
    <BuilderSection title="Blocks">
        <VueDraggable
            v-model="blocks"
            :animation="150"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
            class="blocks">
            <div v-for="block in blocks" :key="block.id" class="h-[80px] w-100% bg-[#f0f3f6] rounded flex flex-col items-center justify-center cursor-move">
                <component :is="block.icon" />
                <span class="text-xs font-medium mt-1">{{ block.label }}</span>
            </div>
        </VueDraggable>
    </BuilderSection>
</template>

<script setup>
import { VueDraggable } from 'vue-draggable-plus'

import IconText from "@/components/Icons/IconText.vue";
import IconImage from "@/components/Icons/IconImage.vue";

import BuilderSection from "@/components/Builder/BuilderSection.vue";

const blocks = [
    { id: 1, name: 'text', label: 'Text', icon: IconText, content: "" },
    { id: 2, name: 'image', label: 'Image', icon: IconImage, content: {} }
]

const clone = (block) => {
    return {
        id: new Date().getTime(),
        label: block.label,
        name: block.name,
        content: block.content
    }
}
</script>

<style lang="scss" scoped>
.blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
}

.ghost {
    border: 1.5px dashed #0d0C22;
    background-color: #f3f3f6;
    width: 100%;
    opacity: 1 !important;
}
</style>

