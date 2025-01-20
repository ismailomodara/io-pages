<template>
    <div v-if="block" class="block bg-white w-[100%] relative">
        <div class="block-navigation">
            <span @click="$emit('action', { name: 'move', value: 'up' })"><IconArrowUp /></span>
            <span class="handle cursor-move"><IconHandle /></span>
            <span @click="$emit('action', { name: 'move', value: 'down' })"><IconArrowDown /></span>
        </div>

        <div class="block-actions">
            <span @click="$emit('action', { name: 'duplicate', value: '' })"><IconDuplicate /></span>
            <span @click="$emit('action', { name: 'remove', value: '' })"><IconDelete /></span>
        </div>

        <component
            :is="blocksComponents[block.name]"
            v-model:content="block.content"
            @action="$emit('action', { name: 'setImage', value: $event })"
        />
    </div>
</template>

<script setup>
import IconDuplicate from "@/components/Icons/IconDuplicate.vue";
import IconDelete from "@/components/Icons/IconDelete.vue";
import IconArrowUp from "@/components/Icons/IconArrowUp.vue";
import IconArrowDown from "@/components/Icons/IconArrowDown.vue";
import IconHandle from "@/components/Icons/IconHandle.vue";

import BlockText from "@/components/Builder/Blocks/BlockText.vue";
import BlockImage from "@/components/Builder/Blocks/BlockImage.vue";

defineProps({
    block: {
        type: Object,
        require: true
    }
});

defineEmits(['action']);

const blocksComponents = {
    text: BlockText,
    image: BlockImage
}
</script>

<style lang="scss" scoped>
.block {
    border: 1px solid transparent;
    padding: 20px 40px;

    &-navigation,
    &-actions {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: grid;
        transition: visibility 0.10s ease-out;

        span {
            height: 25px;
            width: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg {
                height: 14px;
                width: 14px;
            }
        }
    }

    &-navigation {
        top: 50%;
        transform: translateY(-50%);
        left: -10px;
        background-color: #fff;
        grid-template-columns: 1fr;

        span {
            &:not(:last-child) {
                border-bottom: 1px solid #b9bbbb20;
            }

            &.handle {
                cursor: move !important;
            }
        }
    }

    &-actions {
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        grid-template-columns: 1fr 1fr;

        span {
            &:not(:last-child) {
                border-right: 1px solid #ffffff20;
            }

            svg {
                stroke: #ffffff !important;
            }
        }
    }

    &:hover {
        border-color: #cdd1d5;
        border-radius: 0 !important;

        .block-navigation,
        .block-actions {
            visibility: visible;
            opacity: 1;
            transition: visibility 0.10s ease-out;
        }
    }

    &:only-child {
        border-radius: 8px;
    }

    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
}
</style>
