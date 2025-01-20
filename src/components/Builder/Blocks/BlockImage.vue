<template>
    <div ref="blockImage" class="block-image relative h-[250px] w-[100%] shadow-none bg-[#f3f4f5] rounded">
        <template v-if="content && content.id">
            <img :src="content.url" alt="Image" class="h-[100%] w-[100%] object-cover" />
            <div class="block-image-change absolute -top-[14px] left-[5px] p-1 text-xs bg-black text-white cursor-pointer invisible" title="Change image" @click="$emit('action', { name: 'image-update'})">
                <IconImage class="h-[16px] stroke-white" />
            </div>
        </template>
        <div v-else class="h-[100%] w-[100%] flex flex-col justify-center items-center">
            <img class="h-[80px] mb-4" src="/images/placeholder-drag.svg" alt="Drag" />
            <Button class="text-xs" size="small" type="secondary" title="Click to Add Image" @click="$emit('action', { name: 'image-update', value: '' })">Click to add image</Button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import IconImage from "@/components/Icons/IconImage.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
    name: "BlockImage",
    components: {Button, IconImage},
    props: {
        content: {
            type: Object,
            default: null
        }
    },
    emits: ["action"],
})
</script>

<style scoped>
.block-image {
    outline: none;
    border: 1px solid transparent;
}

.block-image:hover {
    border-color: #EAECED;
}

.block-image:hover .block-image-change {
    visibility: visible;
}
</style>
