<template>
    <div class="builder-layout select-none">
        <nav class="builder-layout-nav flex justify-between items-center h-[70px] bg-white px-4 md:px-6 border-b border-gray:50">
            <div class="flex items-center">
                <IconArrowBack class="mr-4 cursor-pointer" tabindex="1" @click="$router.push({ name: 'index' })" />
                <div class="flex flex-col">
                    <input
                        v-model="title"
                        type="text"
                        placeholder="Enter page title..."
                        class="px-0 py-2 bg-transparent rounded-md border-none focus:outline-none focus:ring-0 hover:bg-transparent font-medium"
                        @blur="saveTitle"
                    />
                </div>
            </div>
            <Button @click="save">Save</Button>
        </nav>
        <div class="builder-layout-content w-100% h-[calc(100%-70px)]">
            <aside class="builder-panel py-5 px-4 overflow-y-auto h-100% bg-white border-r border-gray:50">
                <BuilderBlocks />
                <BuilderSettings />
            </aside>
            <div class="builder-canvas py-5 px-8 overflow-y-auto">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

import IconArrowBack from "@/components/Icons/IconArrowBack.vue";

import BuilderBlocks from "@/components/Builder/BuilderBlocks.vue";
import BuilderSettings from "@/components/Builder/BuilderSettings.vue";

import { useAppStore } from "@/stores/app.ts";
import Button from "@/components/Button.vue";
const store = useAppStore();

const title = ref(store.page.title)
const saveTitle = () => {
    store.updatePageData({ title: title.value })
}
const save = () => {
    console.log(store.page)
}
</script>

<style lang="scss" scoped>
.builder-layout {
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    overflow-y: hidden;
    position: relative;

    &-content {
        display: grid;
        grid-template-columns: 300px 1fr;
        overflow-y: hidden;
    }

    @media (max-width: 1024px) {
        &-content {
            grid-template-columns: 250px 1fr;
        }
    }

    @media (max-width: 600px) {
        &-content {
            grid-template-columns: 1fr;
            padding-bottom: 20vh;
        }

        .builder-panel {
            position: fixed;
            z-index: 1;
            bottom: 40px;
            right: 40px;
            height: 20vh;
            width: 80%;
            box-shadow: -4px 16px 25px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            border: 1px solid #000;
        }
    }
}
</style>

