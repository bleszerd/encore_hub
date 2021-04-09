export interface IContentProps {
    contentData: IPost[]
}

export type IPost = {
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
}

export interface IPageNavigationProps {
    hasPrevPage: boolean
    hasNextPage: boolean
    totalPages: number
    page: number
    nextPage: number
    totalDocs: number
}

export interface IHomeProps {
    postData: IPost[]
    pageData: IPageNavigationProps
}

export interface IPageNavigationItem {
    url: string
    text: string | number
}