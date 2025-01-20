import { describe, test, expect } from 'vitest'
import { useBlocks } from "../../composables/useBlocks";

describe('BuilderSection', () => {
  test('useBlocks initialises correctly', () => {
    expect(1 + 1).toEqual(2)
    const block = {
      id: new Date().getTime(),
      label: "Text",
      name: 'text',
      content: ""
    }

    const { blocks } = useBlocks();
    blocks.value.push(block);
    expect(blocks.value.length).toEqual(1);

  })
})
