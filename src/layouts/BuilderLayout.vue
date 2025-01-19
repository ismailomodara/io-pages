<template>
    <div class="builder-layout">
        <nav class="builder-layout-nav">
            <div>
                <IconArrowBack />
                <p>Landing Page Name</p>
            </div>
            <div>
                <button @click="save">Save</button>
            </div>
        </nav>
        <div class="builder-layout-content">
            <aside class="builder-panel">
                <BuilderBlocks />
                <BuilderSettings />
            </aside>
            <div class="builder-canvas">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import IconArrowBack from "@/components/Icons/IconArrowBack.vue";

import BuilderBlocks from "@/components/Builder/BuilderBlocks.vue";
import BuilderSettings from "@/components/Builder/BuilderSettings.vue";

import { useAppStore } from "@/stores/app.ts";

const store = useAppStore();

const save = () => {
    console.log(store.page);
}
</script>

<style lang="scss" scoped>
.builder-layout {
    height: 100vh;
    width: 100vw;
    background-color: #f5f7fa;
    overflow-y: hidden;

    &-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 0 40px;
        background-color: #fff;
        border-bottom: 1px solid #28282820;
    }

    &-content {
        height: calc(100vh - 80px);
        width: 100%;
        background-color: #f5f7fa;
        display: grid;
        grid-template-columns: 300px 1fr;
        overflow-y: hidden;
    }

    .builder-panel {
        height: 100%;
        padding: 30px 15px;
        background-color: #fff;
        border-right: 1px solid #f6f6f6;
        overflow-y: auto;
    }

    .builder-canvas {
        background-color: #f5f7fa;
        padding: 30px;
        overflow-y: auto;
    }
}
</style>

