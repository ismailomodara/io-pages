<template>
    <Modal v-model="computedShow" title="Select an image">
        <div class="image-preview h-[320px] w-[100%] mb-4">
            <img v-if="presetImage.id" :src="presetImage.url" alt="Image" class="h-[100%] w-[100%] object-cover" />
            <div v-else class="h-[200px] w-[100%] flex justify-center items-center">
                <span>No image selected</span>
            </div>
        </div>

        <div class="images grid grid-cols-4 gap-1 mb-2">
            <img
                v-for="image in presetImages"
                :key="image.id"
                class="h-[80px] w-[100%] object-cover cursor-pointer"
                :class="{ selected: image.id === presetImage.id }"
                :src="image.url" :alt="image.url" @click="setPresetImage(image)" />
        </div>
        <div class="w-[100%] text-center">
            <button
                type="button" class="px-2 py-2 bg-[#0d0c22] text-white text-xs rounded-md"
                    @click="update">Set Image</button>
        </div>
    </Modal>
</template>
<script setup>
import { ref, computed, watch} from "vue";
import Modal from "@/components/Modal.vue";

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
    { id: 1, url: "/images/presets/a-day-at-the-beach.jpg" },
    { id: 2, url: "/images/presets/computer-screen-image.jpg" },
    { id: 3, url: "/images/presets/field-of-flowers.jpg" },
    { id: 4, url: "/images/presets/watching-live-soccer.jpg" }
];
const presetImage = ref({ id: null, url: "" });
const setPresetImage = (image) => {
    presetImage.value = image;
}

const update = () => {
    emits("update", presetImage.value);
    computedShow.value = false;
    presetImage.value = { id: null, url: "" };
}

watch(computedShow, () => {
    if (computedShow && props.selectedImage.id) {
        presetImage.value = props.selectedImage
        console.log(presetImage)
    }
})
</script>

<style lang="scss" scoped>
.selected {
    border: 2px solid red;
}
</style>
