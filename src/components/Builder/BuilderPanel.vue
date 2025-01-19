<template>
    <aside>
        <h5>Blocks</h5>
        <VueDraggable
            v-model="blocks"
            :animation="150"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
            class="blocks"
        >
            <div
                v-for="block in blocks"
                :key="block.id"
                class="cursor-move h-50px bg-gray-500/5 rounded p-3 item"
            >
                {{ block.label }}
            </div>
        </VueDraggable>
    </aside>
</template>

<script setup>
import { VueDraggable } from 'vue-draggable-plus'

import BlockText from "@/components/BlockText.vue";
import BlockImage from "@/components/BlockImage.vue";
import { markRaw } from "vue";

const blocks = [
    {
        id: '1',
        name: 'text',
        label: 'Text',
        component: BlockText
    },
    {
        id: '2',
        name: 'image',
        label: 'Image',
        component: BlockImage
    }
]

function clone(block, content) {
    return {
        id: new Date().getTime(),
        label: block.label,
        name: block.name,
        component: markRaw(block.component),
        content: content ?? "",
        blocks: [
            {
                id: new Date().getTime(),
                label: block.label,
                name: block.name,
                component: markRaw(block.component),
                content: content ?? ""
            }
        ]

    }
}


</script>

<style lang="scss" scoped>
.blocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.item {
    background-color: aquamarine;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #181818;
}
.ghost {
    background-color: #0000ff20 !important;
    border: 1.5px dashed #00f;
    width: 100%;
    min-height: 250px;
    opacity: 1 !important;
}
</style>

