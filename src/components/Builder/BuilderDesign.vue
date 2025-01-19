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
                        <span><IconArrowUp /></span>
                        <span><IconHandle class="handle cursor-move" /></span>
                        <span><IconArrowDown /></span>
                    </div>

                    <div class="block-actions">
                        <span @click="duplicate(index)"><IconDuplicate /></span>
                        <span @click="remove(index)"><IconDelete /></span>
                    </div>

                    <component
                        :is="block.component"
                        v-model:content="block.content"
                        @select="setSection(index)"
                    />
                </div>
            </VueDraggable>
        </div>
    </BuilderSection>

    <div v-if="selecting" class="images">
        <span v-for="(image, index) in images" :key="index" class="image" @click="selectImage(image)">Image {{ image }}</span>
    </div>
    <div v-if="blocks.length === 0" class="builder-design-empty">
        <img src="@/assets/placeholder-drag-v2.svg" alt="Drag" />
        <p>Drag and drop a block here to get started</p>
    </div>
</template>

<script setup>
import { ref, markRaw } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";
import IconArrowUp from "@/components/Icons/IconArrowUp.vue";
import IconArrowDown from "@/components/Icons/IconArrowDown.vue";
import IconHandle from "@/components/Icons/IconHandle.vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";

const blocks = ref([])

const images =  ['one', 'two', 'three', 'four'];
const selecting = ref(false)

const sectionIndex = ref(null);
const setSection = (index) => {
    sectionIndex.value = index;
    selecting.value = true;
}

const selectImage = (el) => {
    blocks.value[sectionIndex.value].content = el;
    selecting.value = false;
}

const duplicate = (index) => {
    blocks.value.splice(index + 1, 0, {
        ...blocks.value[index]
    })
}

const remove = (index) => {
    blocks.value.splice(index, 1)
}

const testing = () => {
    console.log("Dragging")
}
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
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
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
                border-color: #6c757d;
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

.item {
    background-color: blanchedalmond;
    padding: 10px;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #181818;
}

.ghost {
    border: 1px dashed #0d0C22 !important;
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
