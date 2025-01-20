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
                <BuilderBlockView
                    v-for="(block, index) in blocks"
                    :key="block.id"
                    :block="block" @action="setAction($event, index)" />
            </VueDraggable>
            <BuilderEmpty v-if="!blocks.length" />
        </div>
    </BuilderSection>

    <BuilderImages
        v-model:show="builderImagesModal.visibility"
        :selected-image="builderImagesModal.selectedImage"
        @update="updateImage" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import BuilderBlockView from "@/components/Builder/BuilderBlockView.vue";
import BuilderEmpty from "@/components/Builder/BuilderEmpty.vue";
import BuilderImages from "@/components/Builder/BuilderImages.vue";
import BuilderSection from "@/components/Builder/BuilderSection.vue";

import { useAppStore } from "@/stores/app.ts";
const store = useAppStore();

const blocks = ref([])

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

const builderImagesModal = ref({
    visibility: false,
    selectedImage: null
})
const selectedBlockIndex = ref(null);
const setImage = (index) => {
    selectedBlockIndex.value = index;
    builderImagesModal.value.selectedImage = blocks.value[selectedBlockIndex.value].content;
    builderImagesModal.value.visibility = true;
}
const updateImage = (image) => {
    blocks.value[selectedBlockIndex.value].content = image;
}

const setAction = (action, index) => {
    switch (action.name) {
        case "move":
            move(index, action.value);
            break;
        case "duplicate":
            duplicate(index);
            break;
        case "remove":
            remove(index);
            break;
        case "setImage":
            setImage(index);
            break;
        default:
            break;
    }
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
}

.ghost {
    border: 1px dashed #0d0C22 !important;
    opacity: 0.4;
    background-color: #f3f3f6;
}
</style>
