<template>
    <div
        v-if="modelValue"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @click.self="closeModal"
    >
        <!-- Modal Content -->
        <div
            class="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 relative"
        >
            <!-- Close Button -->
            <button
                @click="closeModal"
                class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
                ✖
            </button>

            <!-- Slot Content -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('update:modelValue', false);
        },
    },
};
</script>

<style scoped>
</style>
