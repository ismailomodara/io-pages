<template>
    <div class="builder-section mb-5 pb-5">
        <h5 v-if="title" class="font-[600] text-[#006C4C] mb-3 text-xs uppercase tracking-wider" :style="{ textAlign: align }">{{ title }}</h5>
        <slot />
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ""
    },
    align: {
        type: String,
        default: 'left'
    }
})

</script>
<style scoped>
.builder-section:not(:last-child) {
    border-bottom: 1px solid #9ca3af30;
}
</style>
