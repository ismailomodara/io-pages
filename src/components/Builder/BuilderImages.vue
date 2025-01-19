<template>
    <Modal v-model="computedShow">
        <h1>Images</h1>
        <p v-for="el in images" :key="el" @click="select(el)" class="image">Image {{ el }} <span v-if="el === image">(selected)</span> </p>
        <button @click="update">Set image</button>
    </Modal>
</template>
<script setup>
import Modal from "@/components/Modal.vue";
import {ref, computed, watch} from "vue";

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    selected: {
        type: [String, Number],
        default: ""
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

const image = ref("")
const images = [1, 2, 3, 4];

const select = (id) => {
    image.value = id;
}

const update = () => {
    emits("update", image.value);
    computedShow.value = false;
    image.value = ""
}

watch(computedShow, () => {
    if (computedShow && props.selected) {
        console.log('Yo')
        console.log(props.selected)
        image.value = props.selected
    }
})
</script>

<style lang="scss" scoped>
.image {
    background-color: #000;
    padding: 10px;
    margin-bottom: 10px;
    color: #fff;

    span {
        color: #fff;
    }
}
</style>
