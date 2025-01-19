<template>
    <div ref="blockImage" class="block-image">
        <div v-if="!content" class="block-image-empty">
            <img src="@/assets/placeholder-drag-v2.svg" alt="Drag" />
            <button type="button" @click="$emit('action', 'image')">Click here to add an image </button>
        </div>
        <template v-if="content">
            <div>Image {{ content }}</div>
            <div class="block-image-change" @click="$emit('action', 'image')">
                <p>Change image</p>
            </div>
        </template>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlockImage",

    props: {
        content: {
            type: String,
            default: ""
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
    border: 1.5px solid transparent;
    height: 300px;
    width: 100%;
    border-radius: 4px;
    background-color: #f3f4f5;

    &-empty {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            height: 80px;
            margin-bottom: 10px;
        }
    }

    &:hover {
        border-color: #EAECED;
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
