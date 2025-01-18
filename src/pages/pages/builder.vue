<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

const elements = ref([
    {
        id: '1',
        name: 'Text',
    },
    {
        id: '2',
        name: 'Image'
    }
])

const sections = ref([])

function clone(element) {
    const len = sections.value.length
    return {
        id: new Date().getTime(),
        elements: [
            {
                name: `${element.name}-clone-${len}`,
                id: `${element.id}-clone-${len}`
            }
        ]

    }
}
</script>

<template>
    <div class="builder">
        <div class="builder-left">
            <VueDraggable
                v-model="elements"
                :animation="150"
                :group="{ name: 'elements', pull: 'clone', put: false }"
                :clone="clone"
                :sort="false"
                class="elements-area flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"
            >
                <div
                    v-for="item in elements"
                    :key="item.id"
                    class="cursor-move h-50px bg-gray-500/5 rounded p-3 item"
                >
                    {{ item.name }}
                </div>
            </VueDraggable>
        </div>
        <div class="builder-right">
            <VueDraggable
                v-model="sections"
                :animation="150"
                group="elements"
                ghostClass="ghost"
                class="page-area flex flex-col gap-2 p-4 w-300px max-h-350px m-auto bg-gray-500/5 rounded overflow-auto"
            >
                <div
                    v-for="section in sections"
                    :key="section.id"
                    class="cursor-move h-50px bg-gray-500/5 rounded p-3 item section"
                >
                    <p>{{ section.elements[0].name }}</p>
                </div>
            </VueDraggable>
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
            background-color: darkorange !important;
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

    .elements-area {
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
        border: 1.5px dashed black;
        padding: 20px 60px;
        width: 400px;

        p {
            background-color: #fff;
            padding: 5px;
            margin: 0;
        }
    }
}
</style>
