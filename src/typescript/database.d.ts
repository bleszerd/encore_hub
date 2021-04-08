export interface IContentProps {
    contentData: {
        _id: string
        title: string
        slug: string
        author: string
        content: string
        date: string
        image: string
        createdAt: string
        updatedAt: string
        __v: number | any
    }[]
}