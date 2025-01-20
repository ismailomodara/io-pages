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
                :style="{ minHeight: blocks.length === 0 ? '160px' : 'auto' }"
            >
                <BlockView
                    v-for="(block, index) in blocks"
                    :key="block.id"
                    :block="block" @action="interceptSetBlockAction($event, index)"
                    :style="{
                        padding: `${store.page.paddingY}px ${store.page.paddingX}px`,
                        fontFamily: `${store.page.font}, sans-serif`
                    }"
                />
            </VueDraggable>
            <template v-if="!blocks.length">
                <div class="absolute top-0 h-[100%] w-[100%] flex flex-col justify-center items-center opacity-75">
                    <img src="/images/placeholder-drag.svg" alt="Drag" class="mb-2 h-[48px]" />
                    <p class="text-gray-400">Drag and drop a block here to get started</p>
                </div>
            </template>

        </div>
    </BuilderSection>

    <BuilderImages
        v-model:show="builderImagesModal.visibility"
        :selected-image="builderImagesModal.selectedImage"
        @update="setBlockImage" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import BlockView from "@/components/Builder/Blocks/BlockView.vue";
import BuilderImages from "@/components/Builder/BuilderImages.vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";

import { useAppStore } from "@/stores/app.ts";
const store = useAppStore();

import { useBlocks } from "@/composables/useBlocks.ts";
const { blocks, selectedBlockIndex, setBlockAction, setBlockImage  } = useBlocks();

const builderImagesModal = ref({
    visibility: false,
    selectedImage: null
})
function interceptSetBlockAction (action, index) {
    setBlockAction(action, index);
    if (action.name === 'image-update') {
        builderImagesModal.value.selectedImage = blocks.value[selectedBlockIndex.value].content;
        builderImagesModal.value.visibility = true;
    } else {
        builderImagesModal.value.selectedImage = null;
        builderImagesModal.value.visibility = false;
    }
}

watch(() => blocks, () => {
    store.updatePageBlocks(blocks.value)
}, { deep: true })
</script>

<style scoped>
.builder-design {
    border-radius: 8px;
    max-width: 1024px;
    margin: auto;
    border: 1px solid #EAECED;
    background-color: #ffffff;
}

.ghost {
    border: 1px dashed #0d0C22 !important;
    opacity: 0.4;
    background-color: #f3f3f6;
}
</style>
