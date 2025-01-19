import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const pages = ref([]);
    const page = ref({})

    const updatePageSettings = (settings) => {
        page.value = { ...page.value, ...settings }
    }
    const updatePageBlocks = (blocks) => {
        page.value = {
            ...page.value,
            ...blocks
        };
    }

    return { page, pages, updatePageSettings, updatePageBlocks }
})
