import { ref } from 'vue'

interface Image {
    id: number,
    url: string
}

interface Block {
    id: number,
    name: string,
    label: string,
    content: string | Image
}

interface Action {
    name: string,
    value: string | number
}

export function useBlocks() {
    const blocks = ref<Block[]>([]);


    function move (index: number, direction: string) {
        const blocksCount = blocks.value.length;
        if (direction === "up" && index > 0) {
            [blocks.value[index - 1], blocks.value[index]] = [
                blocks.value[index],
                blocks.value[index - 1],
            ];
        } else if (direction === "down" && index < blocksCount - 1) {
            [blocks.value[index], blocks.value[index + 1]] = [
                blocks.value[index + 1],
                blocks.value[index],
            ];
        }
    }

    function duplicate (index: number) {
        blocks.value.splice(index + 1, 0, {
            ...blocks.value[index]
        })
    }

    function remove (index: number) {
        blocks.value.splice(index, 1)
    }

    const selectedBlockIndex = ref<number|null>(null);
    function setBlockAction (action: Action, index: number) {
        switch (action.name) {
            case "move":
                move(index, action.value as string);
                break;
            case "duplicate":
                duplicate(index);
                break;
            case "remove":
                remove(index);
                break;
            case "image-update":
                selectedBlockIndex.value = index;
                break;
            default:
                break;
        }
    }

    function setBlockImage (image: Image) {
        blocks.value[selectedBlockIndex.value!].content = image;
        setTimeout(() => {
            selectedBlockIndex.value = null;
        }, 200)
    }

    return {
        blocks,
        selectedBlockIndex,
        setBlockAction,
        setBlockImage
    }
}
