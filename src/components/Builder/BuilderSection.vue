<template>
    <div class="builder-section">
        <h5 v-if="title" :style="{ textAlign: align }">{{ title }}</h5>
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
<style lang="scss" scoped>
.builder-section {
    margin-bottom: 20px;
    padding-bottom: 20px;

    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }

    h5 {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px;
        color: #0d0C22;
        margin-bottom: 10px;
    }
}
</style>
