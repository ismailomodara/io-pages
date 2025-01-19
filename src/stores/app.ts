import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Page, PageBlock } from "@/types";

export const useAppStore = defineStore('app', () => {
    const page = ref({
        title: "Untitled Page",
        font: "Figtree",
        paddingX: 40,
        paddingY: 40
    })

    const updatePageData = (data: Page) => {
        page.value = { ...page.value, ...data }
    }

    const updatePageBlocks = (blocks: PageBlock[]) => {
        page.value = {
            ...page.value,
            ...blocks
        };
    }

    return { page, updatePageData, updatePageBlocks }
})
