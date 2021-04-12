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

export type IAuthor = {
    social: {
        twitter?: string
        instagram?: string
        github:? string
    }
    _id: string
    photo: string
    username: string
    password: string
    invite: string
    fullName: string
    bio: string
    fullText: string
    birthday: string
    createdAt: string
    updatedAt: string
    __v: string
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
    label: number
    active?: boolean
}