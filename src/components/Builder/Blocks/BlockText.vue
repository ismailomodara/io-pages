<template>
    <div ref="blockText" class="block-text" :contenteditable="true" @blur="blur">
        <p>{{ content || "Write whatever text you want here." }}</p>
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

    methods: {
        blur() {
            this.$emit("update:content", this.$refs.blockText.textContent)
        }
    },

    mounted() {
        this.$refs.blockText.focus()
    }
})
</script>

<style scoped>
.block-text {
    padding: 10px 0;
    color: var(--text);
    background-color: transparent;
    font-size: 16px;
    font-weight: inherit;
    outline: none;
    box-shadow: none;
    width: 100%;
    margin: auto;
    border: 1.5px solid transparent;
    border-radius: 4px;
}
</style>
