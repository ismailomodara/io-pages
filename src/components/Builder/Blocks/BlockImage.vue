<template>
    <div ref="blockImage" class="block-image">
        <template v-if="content && content.id">
            <img :src="content.url" alt="Image" class="h-[100%] w-[100%] object-cover" />
            <div class="block-image-change absolute -top-[14px] left-[5px] p-1 text-xs bg-black text-white cursor-pointer invisible " @click="$emit('action', 'image')">
                <IconImage class="h-[16px] stroke-white" />
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
import IconImage from "@/components/Icons/IconImage.vue";

export default defineComponent({
    name: "BlockImage",
    components: {IconImage},
    props: {
        content: {
            type: Object,
            default: null
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
