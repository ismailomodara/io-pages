<template>
    <BuilderSection title="Design your page" align="center">
        <div class="builder-design relative">
            <VueDraggable
                v-model="blocks"
                :animation="150"
                group="blocks"
                ghostClass="ghost"
                handle=".handle"
                class="blocks relative"
                @change="test"
                @end="test2"
                :style="{ minHeight: blocks.length === 0 || !changing ? '160px' : 'auto' }"
            >
                <div
                    v-for="(block, index) in blocks"
                    :key="block.id" class="block bg-white w-[100%] relative"
                    :style="{
                        padding: `${store.page.paddingY}px ${store.page.paddingX}px`,
                        fontFamily: `${store.page.font}, sans-serif`
                    }">
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
                        :is="blocksComponents[block.name]"
                        v-model:content="block.content"
                        @action="setBlock($event, index)"
                    />
                </div>
            </VueDraggable>
            <BuilderEmpty v-if="!blocks.length" />
        </div>
    </BuilderSection>

    <BuilderImages
        v-model:show="builderImagesModal.visibility"
        :selected-image="builderImagesModal.selectedImage"
        @update="updateBlockImage" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";
import IconArrowUp from "@/components/Icons/IconArrowUp.vue";
import IconArrowDown from "@/components/Icons/IconArrowDown.vue";
import IconHandle from "@/components/Icons/IconHandle.vue";

import BuilderSection from "@/components/Builder/BuilderSection.vue";
import BuilderImages from "@/components/Builder/BuilderImages.vue";

import BlockText from "@/components/Builder/Blocks/BlockText.vue";
import BlockImage from "@/components/Builder/Blocks/BlockImage.vue";

import { useAppStore } from "@/stores/app.ts";
import BuilderEmpty from "@/components/Builder/BuilderEmpty.vue";

const store = useAppStore();

const blocks = ref([])
const blocksComponents = {
    text: BlockText,
    image: BlockImage
}

const builderImagesModal = ref({
    visibility: false,
    selectedImage: null
})
const selectedBlockIndex = ref(null);
const setBlock = (action, index) => {
    selectedBlockIndex.value = index;

    if (action === 'image') {
        builderImagesModal.value.selectedImage = blocks.value[selectedBlockIndex.value].content;
        builderImagesModal.value.visibility = true;
    }
}
const updateBlockImage = (image) => {
    blocks.value[selectedBlockIndex.value].content = image;
}

const move = (index, direction) => {
    const blocksCount = blocks.value.length;
    if (direction === "up" && index > 0) {
        [blocks.value[index - 1], blocks.value[index]] = [
            blocks.value[index],
            blocks.value[index - 1],
        ];
    } else if (direction === "down" && index < blocksCount - 1) {
        [blocks.value[index], blocks.value[index + 1]] = [
            blocks.value[index + 1],
            blocks.value[index],
        ];
    }
}

const duplicate = (index) => {
    blocks.value.splice(index + 1, 0, {
        ...blocks.value[index]
    })
}

const remove = (index) => {
    blocks.value.splice(index, 1)
}

const changing = ref(false);
const test = () => {
    changing.value = true;
    console.log("Sushi")
}
const test2 = () => {
    changing.value = false;
    console.log("Sushi2")
}

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
        .block {
            border: 1px solid transparent;
            padding: 20px 40px;

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
</style>
