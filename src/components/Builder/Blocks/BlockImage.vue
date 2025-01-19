<template>
    <div ref="blockImage" class="block-image">
        <template v-if="content.id">
            <img :src="content.url" alt="Image" class="h-[100%] w-[100%] object-cover" />
            <div class="block-image-change absolute -top-[22px] px-2 py-1 text-xs bg-black text-white cursor-pointer invisible " @click="$emit('action', 'image')">
                <p>Change image</p>
            </div>
        </template>
        <div v-else class="h-[100%] w-[100%] flex flex-col justify-center items-center">
            <img class="h-[80px] mb-4" src="@/assets/placeholder-drag-v2.svg" alt="Drag" />
            <button type="button" class="px-2 py-2 bg-[#0d0c22] text-white text-xs rounded-md"
                    @click="$emit('action', 'image')">Click to add image </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlockImage",

    props: {
        content: {
            type: Object,
            default: () => {
                return { id: null, url: "" }
            }
        }
    },

    emits: ["action"],
})
</script>

<style lang="scss" scoped>
.block-image {
    position: relative;
    outline: none;
    box-shadow: none;
    border: 1px solid transparent;
    height: 250px;
    width: 100%;
    border-radius: 4px;
    background-color: #f3f4f5;

    &:hover {
        border-color: #EAECED;
    }

    &:hover {
        .block-image-change {
            visibility: visible;
        }
    }
}
</style>
