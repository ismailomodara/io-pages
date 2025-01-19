<script setup>
import { ref, markRaw } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

import IconHandle from "@/components/Icons/IconHandle.vue";
import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";

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
</script>

<template>
    <VueDraggable
        v-model="blocks"
        :animation="150"
        group="blocks"
        ghostClass="ghost"
        handle=".handle"
        class="builder-design"
    >
        <div
            v-for="(block, index) in blocks"
            :key="block.id"
            class="cursor-move h-50px bg-gray-500/5 rounded p-3 item block"
        >
            <IconHandle class="handle cursor-move" />

            <component
                :is="block.component"
                v-model:content="block.content"
                @select="setSection(index)"
            />
            <IconDuplicate @click="duplicate(index)" />
            <IconDelete @click="remove(index)" />
        </div>
        <template v-if="blocks.length === 0">
            <p>Drag and drop a block here to get started</p>
        </template>
    </VueDraggable>

    <div v-if="selecting" class="images">
        <span v-for="(image, index) in images" :key="index" class="image" @click="selectImage(image)">Image {{ image }}</span>
    </div>
</template>

<style lang="scss" scoped>
.builder-design {
    min-height: 250px;
    border-radius: 4px;
    background-color: #fff;
    max-width: 1280px;
    margin: auto;
    border: 1px solid #f2f2f2;
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
    opacity: 0.4;
    border: 1px dashed #000 !important;
}

.block {
    background-color: #fff;
    border: 1px solid transparent;
    padding: 20px 60px;
    width: 100%;

    &:hover {
        border-color: black;
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
