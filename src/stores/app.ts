import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const pages = ref([]);
    const page = ref({})

    return { page, pages }
})
