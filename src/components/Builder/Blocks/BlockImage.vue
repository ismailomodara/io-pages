<template>
    <div ref="blockImage" class="block-image">
        <p>Image Element - <span v-if="content">{{ content }}</span></p>
        <div v-if="!content">
            <p>Please select an image</p>
            <button type="button" @click="$emit('select')">Select </button>
        </div>
        <div v-if="content" class="block-image-change" @click="$emit('select')">
            <p>Change image</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlockImage",

    props: {
        editing: {
            type: Boolean,
            default: true
        },
        content: {
            type: String,
            default: ""
        }
    },

    emits: ["update:content", "select"],

    data() {
        return {
            images: ['one', 'two', 'three', 'four'],
            image: ""
        }
    },

    methods: {
        setImage(imageId) {
            this.$emit("update:content", imageId);
        }
    }
})
</script>

<style lang="scss" scoped>
.block-image {
    position: relative;
    outline: none;
    box-shadow: none;
    border: 1.5px solid transparent;

    &:hover {
        border-color: #0d0C22;
    }

    &-change {
        position: absolute;
        top: -20px;
        font-size: 12px;
        background-color: orange;
        padding-left: 5px;
        cursor: pointer;
        visibility: hidden;
    }

    &:hover {
        .block-image-change {
            visibility: visible;
        }
    }
}

.images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.image {
    margin-right: 10px;
    padding: 10px;
    background-color: #fff;
    font-size: 10px;
    cursor: pointer;
}
</style>
