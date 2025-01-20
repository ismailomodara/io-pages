<template>
    <div
        v-if="modelValue"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @click.self="close"
    >
        <!-- Modal Content -->
        <div class="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/2 p-6 relative">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-medium">{{ title }}</h4>
                <button @click="close" class="text-gray-500 hover:text-gray-800">
                    <IconClose />
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import IconClose from "@/components/Icons/IconClose.vue";

export default defineComponent({
    name: "Modal",
    components: { IconClose },
    props: {
        title: {
            type: String,
            required: true
        },
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['close'],
    methods: {
        close() {
            this.$emit('update:modelValue', false);
        },
    },
})
</script>
