<template>
    <button :class="`${computedSize} font-medium text-md ${computedText} ${computedType} rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg focus:outline-none focus:ring-[transparent] active:translate-y-[1px] transition-transform duration-150`">
        <slot />
    </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    props: {
        size: {
            type: String,
            default: "regular"
        },
        type: {
            type: String,
            default: "primary"
        },
    },
    computed: {
        computedSize() {
            if (this.size === 'small') {
                return "px-2 py-2"
            }
            if (this.size === 'large') {
                return "px-8 py-3"
            }
            return "px-6 py-2"
        },
        computedType() {
            if (this.type === 'secondary') {
                return "bg-[#0d0c22]"
            } else if (this.type === 'tertiary') {
                return "bg-[#ffffff]"
            }
            return "bg-[#006C4C]"
        },
        computedText() {
            if (this.type === 'secondary') {
                return "text-[#ffffff]"
            } else if (this.type === 'tertiary') {
                return "text-[#0d0c22]"
            }
            return "text-[#ffffff]"
        }
    }
})
</script>

<style scoped>
button {
    font-family: "Figtree", sans-serif !important;
}
</style>
