<script setup>
import { ref, shallowRef, markRaw } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import BlockText from "@/components/BlockText.vue";
import BlockImage from "@/components/BlockImage.vue";
import IconHandle from "@/components/Icons/IconHandle.vue";
import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";

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

const sections = ref([])

function clone(block, content) {
    const len = sections.value.length
    return {
        id: new Date().getTime(),
        blocks: [
            {
                id: `${block.name}-clone-${len}`,
                label: `${block.label}-clone-${len}`,
                name: block.name,
                component: markRaw(block.component),
                content: content ?? ""
            }
        ]

    }
}

const images =  ['one', 'two', 'three', 'four'];
const selecting = ref(false)

const sectionIndex = ref(null);
const setSection = (index) => {
    sectionIndex.value = index;
    selecting.value = true;
}

const selectImage = (el) => {
    sections.value[sectionIndex.value].blocks[0].content = el;
    selecting.value = false;
}

const duplicate = (index, blockName) => {
    const block = blocks.find(block => block.name === blockName);
    const content = sections.value[index].blocks[0].content;
    sections.value.splice(index + 1, 0, clone(block, content))
}

const remove = (index) => {
    sections.value.splice(index, 1)
}
</script>

<template>
    <div class="builder">
        <div class="builder-left">
            <VueDraggable
                v-model="blocks"
                :animation="150"
                :group="{ name: 'blocks', pull: 'clone', put: false }"
                :clone="clone"
                :sort="false"
                class="blocks-area flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"
            >
                <div
                    v-for="block in blocks"
                    :key="block.id"
                    class="cursor-move h-50px bg-gray-500/5 rounded p-3 item"
                >
                    {{ block.label }}
                </div>
            </VueDraggable>
        </div>
        <div class="builder-right">
            <VueDraggable
                v-model="sections"
                :animation="150"
                group="blocks"
                ghostClass="ghost"
                handle=".handle"
                class="page-area flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto"
            >
                <div
                    v-for="(section, index) in sections"
                    :key="section.id"
                    class="cursor-move h-50px bg-gray-500/5 rounded p-3 item section"
                >
                    <IconHandle class="handle cursor-move" />
                    <component
                        :is="section.blocks[0].component"
                        v-model:content="section.blocks[0].content"
                        @select="setSection(index)"
                    />
                    <IconDuplicate @click="duplicate(index, section.blocks[0].name)" />
                    <IconDelete @click="remove(index)" />
                </div>
            </VueDraggable>

            <div v-if="selecting" class="images">
                <span v-for="(image, index) in images" :key="index" class="image" @click="selectImage(image)">Image {{ image }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.builder {
    width: 100vw;
    height: 100vh;
    display: flex;

    &-left {
        height: 100%;
        width: 40%;
        background-color: #fafafa;
        padding: 20px;
    }

    &-right {
        width: 60%;
        height: 100%;
        padding: 20px;
        background-color: #ffffff;

        .item {
            background-color: blanchedalmond !important;
        }
    }

    .item {
        background-color: aquamarine;
        padding: 10px;
        width: 200px;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 500;
        color: #181818;
    }

    .blocks-area {
        border: 1px dashed black;
        padding: 40px;
    }

    .page-area {
        border: 1px dashed darkorange;
        padding: 40px;
    }

    .ghost {
        background-color: #0000ff20 !important;
        border: 1.5px dashed #00f;
        width: 400px;
        opacity: 1 !important;
    }

    .section {
        border: 1px solid orange;
        padding: 20px 60px;
        width: 400px;

        &:hover {
            border-color: black;
        }
    }
}

.images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .image {
        margin-right: 10px;
        padding: 10px;
        background-color: #000;
        color: #fff;
        font-size: 10px;
        cursor: pointer;
    }
}


</style>
