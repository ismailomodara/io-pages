<!--
    This component handles previewing and selection of images for the Image Block.
    A list of predefined images stored in the public directory.
    A logic to update parent component of selected image.
-->
<template>
    <Modal v-model="computedShow" title="Select an image">
        <div class="image-preview h-[320px] w-[100%] mb-4">
            <img v-if="presetImage.id" :src="presetImage.url" alt="Image" class="h-[100%] w-[100%] object-cover" />
            <div v-else class="h-[200px] w-[100%] flex justify-center items-center">
                <span>No image selected</span>
            </div>
        </div>

        <div class="images grid grid-cols-4 gap-1 mb-3">
            <img
                v-for="image in presetImages"
                :key="image.id"
                class="h-[80px] w-[100%] object-cover cursor-pointer"
                tabindex="0"
                :class="{ selected: image.id === presetImage.id }"
                :src="image.url" :alt="image.url" @click="setPresetImage(image)" />
        </div>
        <div class="w-[100%] text-center">
            <Button class="text-xs px-4" size="small" type="secondary" @click="update">Save Image</Button>
        </div>
    </Modal>
</template>
<script setup>
import { ref, computed, watch} from "vue";
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    selectedImage: {
        type: Object,
        default: () => {
            return { id: null, url: "" }
        }
    }
})

const emits = defineEmits(['update:show', 'update'])
const computedShow = computed({
    get() {
        return props.show
    },
    set(value) {
        emits("update:show", value)
    }
})

const presetImages = [
    { id: 1, url: "/images/presets/a-day-at-the-beach.jpg", ref: "https://www.pexels.com/photo/dusk-at-the-beach-with-urban-skyline-30154480/" },
    { id: 2, url: "/images/presets/computer-screen-image.jpg", ref: "https://www.pexels.com/photo/macbook-pro-near-white-ceramic-mug-265152/" },
    { id: 3, url: "/images/presets/field-of-flowers.jpg", ref: "https://www.pexels.com/photo/close-up-photo-of-red-flowers-1961778/" },
    { id: 4, url: "/images/presets/watching-live-soccer.jpg", ref: "https://www.pexels.com/photo/people-watching-soccer-game-1884574/" }
];
const presetImage = ref({ id: null, url: "" });
function setPresetImage (image) {
    presetImage.value = image;
}

function update() {
    emits("update", presetImage.value);
    computedShow.value = false;
    presetImage.value = { id: null, url: "" };
}

watch(computedShow, () => {
    if (computedShow && props.selectedImage && props.selectedImage.id) {
        presetImage.value = props.selectedImage
    }
})
</script>

<style scoped>
.selected {
    border: 2px solid red;
}
</style>
