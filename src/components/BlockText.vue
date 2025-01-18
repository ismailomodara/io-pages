<template>
    <div ref="blockText" class="block-text" :contenteditable="true" @blur="blur">
        <p>{{ content || "Enter text here" }}</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlockText",

    props: {
        content: {
            type: String,
            default: "Enter text here"
        }
    },

    emits: ["update:content"],

    data() {
        return {}
    },

    methods: {
        blur() {
            this.$emit("update:content", this.$refs.blockText.textContent)
        }
    },

    mounted() {
        this.$refs.text.focus()
    }
})
</script>

<style lang="scss" scoped>
.block-text {
    padding: 10px 30px;
    color: #000;
    background-color: transparent;
    font-size: 16px;
    outline: none;
    box-shadow: none;
    width: 100%;
    margin: auto;
    border: 1.5px solid transparent;

    &:focus {
        border-color: #000;
    }

    &:hover {
        border-color: #000;
    }
}
</style>
