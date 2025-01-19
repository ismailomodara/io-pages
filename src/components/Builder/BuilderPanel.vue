<template>
    <aside>
        <!-- Blocks -->
        <BuilderSection title="Blocks">
            <VueDraggable
                v-model="blocks"
                :animation="150"
                :group="{ name: 'blocks', pull: 'clone', put: false }"
                :clone="clone"
                :sort="false"
                class="blocks"
            >
                <div v-for="block in blocks" :key="block.id" class="block">
                    <component :is="block.icon" />
                    <span>{{ block.label }}</span>
                </div>
            </VueDraggable>
        </BuilderSection>


        <!-- General Settings -->
        <BuilderSection title="General" />
    </aside>
</template>

<script setup>
import { markRaw } from "vue";
import { VueDraggable } from 'vue-draggable-plus'

import BlockText from "@/components/Builder/Blocks/BlockText.vue";
import BlockImage from "@/components/Builder/Blocks/BlockImage.vue";

import IconText from "@/components/Icons/IconText.vue";
import IconImage from "@/components/Icons/IconImage.vue";

import BuilderSection from "@/components/Builder/BuilderSection.vue";

const blocks = [
    {
        id: '1',
        name: 'text',
        label: 'Text',
        component: BlockText,
        icon: IconText
    },
    {
        id: '2',
        name: 'image',
        label: 'Image',
        component: BlockImage,
        icon: IconImage
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .block {
        height: 80px;
        width: 100%;
        background-color: #f4f4f4;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move !important;

        span {
            font-size: 12px;
        }
    }
}
.ghost {
    border: 1.5px dashed #0d0C22;
    background-color: #f3f3f6;
    width: 100%;
    opacity: 1 !important;
}
</style>

