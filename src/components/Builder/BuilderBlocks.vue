<template>
    <BuilderSection title="Blocks">
        <VueDraggable
            v-model="blocks"
            :animation="150"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
            class="blocks">
            <div v-for="block in blocks" :key="block.id" class="h-[80px] w-100% bg-[#f0f3f6] rounded flex flex-col items-center justify-center cursor-move" tabindex="0">
                <component :is="block.icon" />
                <span class="text-xs font-medium mt-1">{{ block.label }}</span>
            </div>
        </VueDraggable>
    </BuilderSection>
</template>

<script setup>
import { VueDraggable } from 'vue-draggable-plus'
import { blocks } from "@/components/Builder/Blocks/blocks.ts";

import BuilderSection from "@/components/Builder/BuilderSection.vue";

function clone (block) {
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
}

@media (max-width: 1024px) {
    .blocks {
        grid-template-columns: 1fr 1fr;
    }
}

.ghost {
    border: 1.5px dashed #0d0C22;
    background-color: #f3f3f6;
    width: 100%;
    height: 160px;
    opacity: 1 !important;
}
</style>

