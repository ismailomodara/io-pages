export interface PageBlock {
    id: number,
    name: string,
    label: string,
    text?: string,
    url?: string,
    content: string
}

export interface Page {
    title: string,
    font: string,
    paddingX: number,
    paddingY: number,
    blocks: PageBlock[]
}
