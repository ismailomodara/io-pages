import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Image {
    id: number | null,
    url: string
}

interface PageBlock {
    id: number,
    name: string,
    label: string,
    content: string | Image
}

interface Page {
    title: string,
    font: string,
    paddingX: number,
    paddingY: number,
    blocks: PageBlock[]
}


export const useAppStore = defineStore('app', () => {
    const page = ref<Page>({
        title: "Untitled Page",
        font: "Figtree",
        paddingX: 40,
        paddingY: 20,
        blocks: []
    })

    function updatePageData (data: Page) {
        page.value = { ...page.value, ...data }
    }

    function updatePageBlocks (blocks: PageBlock[]) {
        page.value = {
            ...page.value,
            blocks
        };
    }

    return { page, updatePageData, updatePageBlocks }
})
