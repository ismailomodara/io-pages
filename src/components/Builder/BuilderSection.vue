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
        border-bottom: 1px solid #9ca3af30;
    }

    h5 {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 12px;
        color: #006C4C;
        margin-bottom: 10px;
    }
}
</style>
