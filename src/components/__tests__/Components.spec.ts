import { describe, test, expect } from 'vitest'

import BuilderSection from "@/components/Builder/BuilderSection.vue";
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import BlockText from "@/components/Builder/Blocks/BlockText.vue";
import BlockImage from "@/components/Builder/Blocks/BlockImage.vue";

describe('BuilderSection', () => {
    test('imports correctly', () => {
        expect(BuilderSection).toBeDefined()
    })
});

describe('Modal', () => {
    test('imports correctly', () => {
        expect(Modal).toBeDefined()
    })
});

describe('Button', () => {
    test('imports correctly', () => {
        expect(Button).toBeDefined()
    })
});

describe('BlockText', () => {
    test('imports correctly', () => {
        expect(BlockText).toBeDefined()
    })
});

describe('BlockImage', () => {
    test('imports correctly', () => {
        expect(BlockImage).toBeDefined()
    })
});

