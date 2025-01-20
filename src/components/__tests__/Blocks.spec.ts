import { describe, test, expect } from 'vitest';
import { blocks } from "../Builder/Blocks/blocks";


describe('Blocks', () => {
    test('Blocks exist', () => {
        expect(blocks.length).toBeGreaterThan(0)
    })

    test('Text block exist', () => {
        const text = blocks.find(block => block.name === 'text');
        expect(text).toEqual(blocks[0])
    })

    test('Image block exist', () => {
        const image = blocks.find(block => block.name === 'image');
        expect(image).toEqual(blocks[1])
    })
})



