import { describe, it, expect } from 'vitest';
import { blocks } from "../Builder/Blocks/blocks";
import IconText from "@/components/Icons/IconText.vue";
import IconImage from "@/components/Icons/IconImage.vue";


describe('Blocks', () => {
    it('should check if blocks exist', () => {
        expect(blocks.length).toBeGreaterThan(0)
    })

    it('should check if text block exist', () => {
        const text = blocks.find(block => block.name === 'text');
        expect(text).toEqual({ id: 1, name: "text", label: "Text", icon: IconText, content: "" })
    })

    it('should check if image block exist', () => {
        const image = blocks.find(block => block.name === 'image');
        expect(image).toEqual({ id: 2, name: 'image', label: "Image", icon: IconImage, content: { id: null, url: "" }})
    })
})



