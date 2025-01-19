<template>
    <BuilderSection title="Design your page" align="center">
        <div class="builder-design">
            <VueDraggable
                v-model="blocks"
                :animation="150"
                group="blocks"
                ghostClass="ghost"
                handle=".handle"
                class="blocks"
                :style="{ minHeight: blocks.length === 0 ? '250px' : 'auto' }"
            >
                <div v-for="(block, index) in blocks" :key="block.id" class="block">
                    <div class="block-navigation">
                        <span @click="move(index, 'up')"><IconArrowUp /></span>
                        <span class="handle cursor-move"><IconHandle /></span>
                        <span @click="move(index, 'down')"><IconArrowDown /></span>
                    </div>

                    <div class="block-actions">
                        <span @click="duplicate(index)"><IconDuplicate /></span>
                        <span @click="remove(index)"><IconDelete /></span>
                    </div>

                    <component
                        :is="block.component"
                        v-model:content="block.content"
                        @action="setBlock($event, index)"
                    />
                </div>
            </VueDraggable>
        </div>
    </BuilderSection>

    <BuilderImages
        v-model:show="builderImagesModal.visibility"
        :selected="builderImagesModal.selected"
        @update="updateBlockImage" />

    <div v-if="blocks.length === 0" class="builder-design-empty">
        <img src="@/assets/placeholder-drag-v2.svg" alt="Drag" />
        <p>Drag and drop a block here to get started</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAppStore } from "@/stores/app.ts";
import { VueDraggable } from 'vue-draggable-plus'

import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";
import IconArrowUp from "@/components/Icons/IconArrowUp.vue";
import IconArrowDown from "@/components/Icons/IconArrowDown.vue";
import IconHandle from "@/components/Icons/IconHandle.vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";
import BuilderImages from "@/components/Builder/BuilderImages.vue";

const blocks = ref([])

const builderImagesModal = ref({
    visibility: false,
    selected: null
})
const selectedBlockIndex = ref(null);
const setBlock = (action, index) => {
    selectedBlockIndex.value = index;

    if (action === 'image') {
        builderImagesModal.value.selected = blocks.value[selectedBlockIndex.value].content;
        builderImagesModal.value.visibility = true;
    }
}
const updateBlockImage = (url) => {
    blocks.value[selectedBlockIndex.value].content = "www.google.com/"+url;
}

const move = (index, dir) => {
    const blocksCount = blocks.value.length;

    if (index === 0 && dir === 'up') {
        return;
    }

    if (index + 1 === blocksCount && dir === 'down') {
        return;
    }

    const destinationIndex = dir === 'up' ? index - 1 : index + 1;
    const destinationContent = JSON.parse(JSON.stringify(blocks.value[destinationIndex]));
    const currentContent = JSON.parse(JSON.stringify(blocks.value[index]));

    console.log(destinationContent)
    console.log(currentContent)

    blocks.value[destinationIndex] = currentContent;
    blocks.value[index] = destinationContent;

    console.log(index)
    console.log(dir)

    console.log(blocks.value)
}

const duplicate = (index) => {
    blocks.value.splice(index + 1, 0, {
        ...blocks.value[index]
    })
}

const remove = (index) => {
    blocks.value.splice(index, 1)
}

const store = useAppStore();
watch(() => blocks, () => {
    store.updatePageBlocks(blocks.value)
}, { deep: true })
</script>

<style lang="scss" scoped>
.builder-design {
    border-radius: 8px;
    max-width: 1024px;
    margin: auto;
    border: 1px solid #EAECED;
    background-color: #ffffff;

    .blocks {
        position: relative;

        .block {
            background-color: #fff;
            border: 1px solid transparent;
            padding: 20px 40px;
            width: 100%;
            position: relative;

            &-navigation,
            &-actions {
                visibility: hidden;
                opacity: 0;
                position: absolute;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                display: grid;
                transition: visibility 0.10s ease-out;

                span {
                    height: 25px;
                    width: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    svg {
                        height: 14px;
                        width: 14px;
                    }
                }
            }

            &-navigation {
                top: 50%;
                transform: translateY(-50%);
                left: -10px;
                background-color: #fff;
                grid-template-columns: 1fr;

                span {
                    &:not(:last-child) {
                        border-bottom: 1px solid #b9bbbb20;
                    }

                    &.handle {
                        cursor: move !important;
                    }
                }
            }

            &-actions {
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #000;
                grid-template-columns: 1fr 1fr;

                span {
                    &:not(:last-child) {
                        border-right: 1px solid #ffffff20;
                    }

                    svg {
                        stroke: #ffffff !important;
                    }
                }
            }

            &:hover {
                border-color: #cdd1d5;
                border-radius: 0 !important;

                .block-navigation,
                .block-actions {
                    visibility: visible;
                    opacity: 1;
                    transition: visibility 0.10s ease-out;
                }
            }

            &:only-child {
                border-radius: 8px;
            }

            &:first-child {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }

            &:last-child {
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }
}


.ghost {
    border: 1px dashed #0d0C22 !important;
    opacity: 0.4;
    background-color: #f3f3f6;
}

.images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .image {
        margin-right: 10px;
        padding: 10px;
        background-color: #0d0C22;
        color: #fff;
        font-size: 10px;
        cursor: pointer;
    }
}


</style>
