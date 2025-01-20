import { describe, it, expect } from 'vitest'
import { useBlocks } from "@/composables/useBlocks";

describe('useBlocks', () => {
  let composable: ReturnType<typeof useBlocks>;

  composable = useBlocks();
  composable.blocks.value = [
    { id: 1, name: 'text', label: "Text", content: "" },
    { id: 2, name: 'image', label: "Image", content: { id: null, url: "" }},
  ]

  it('initialized correctly', () => {
    expect(composable.blocks.value.length).toEqual(2);
  });

  it('should move a block down', () => {
    composable.setBlockAction({ name: 'move', value: 'down' }, 0)
    expect(composable.blocks.value[1]).toEqual({
      id: 1,
      name: 'text',
      label: "Text",
      content: ""
    });
  });

  it('should move a block up', () => {
    composable.setBlockAction({ name: 'move', value: 'up' }, 1)
    expect(composable.blocks.value[0]).toEqual({
      id: 1,
      name: 'text',
      label: "Text",
      content: ""
    });
  });

  it('should move with invalid index', () => {
    composable.setBlockAction({ name: 'move', value: 'up' }, -1)
    expect(composable.blocks.value[0]).toEqual({
      id: 1,
      name: 'text',
      label: "Text",
      content: ""
    });
  });

  it('should duplicate a block', () => {
    composable.setBlockAction({ name: 'duplicate', value: '' }, 0)
    expect(composable.blocks.value[1]).toEqual({
      id: 1,
      name: 'text',
      label: "Text",
      content: ""
    });
  });

  it('should duplicate with invalid index', () => {
    composable.setBlockAction({ name: 'duplicate', value: '' }, -2)
    expect(composable.blocks.value[2]).toEqual({
      id: 2,
      name: 'image',
      label: "Image",
      content: { id: null, url: "" }
    });
  });

  it('should remove a block', () => {
    composable.setBlockAction({ name: 'remove', value: '' }, 1)
    expect(composable.blocks.value[2]).toEqual(undefined);
  });

  it('should remove with invalid index', () => {
    composable.setBlockAction({ name: 'remove', value: '' }, -2)
    expect(composable.blocks.value[1]).toEqual({
      id: 2,
      name: 'image',
      label: "Image",
      content: { id: null, url: "" }
    });
  });

  it('should set image for image block', () => {
    composable.setBlockAction({ name: 'image-update', value: '' }, 1)
    composable.setBlockImage({ id: 1, url: "/images/presets/a-day-at-the-beach.jpg" })

    expect(composable.blocks.value[1].content).toEqual({ id: 1, url: "/images/presets/a-day-at-the-beach.jpg" })
  });
});
