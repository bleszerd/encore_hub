import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components'
import { IAuthor, IPost } from './database';

/* ================= Styled Components ================= */
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            purple: string
            purpink: string
            candy: string
            sunset: string
            sand: string
            yellow: string
            background: string
            white: string
            text: string
        }
    }
}

/* ================= App Wrapper ================= */
export interface AppWrapperProps {
    children: ReactNode
}

/* ================= Content Card ================= */
export interface ContentCard {
    title: string
    image: string
    author: string
    date: string
    slug: string
}

export interface SImageProps {
    src: string
}

export type ContentCardProps = ContentCard

/* ================= Post ================= */
export interface PostSectionProps {
    title: string
    image: string
    author: string
    date: string
    content: string
    slug?: string
}

export interface SPostImageProps {
    src: string
}

/* ================= Author Footer ================= */
export interface SAuthorImage {
    src: string
}

/* ================= Author Content ================= */
export interface SAuthorContentImage {
    src: string
}

/* ================= Author Footer ================= */
export type IAuthorFooterProps = IAuthor

/* ================= Post View (page [slug]) ================= */
export interface IPostProps {
    postData: IPost
    authorData: IAuthor
}

/* ================= Login Form ================= */
export interface LoginFormProps {
    fetchUserData: (authorUsername: string) => void 
}

/* ================= Providers ================= */
export interface AuthorDataProps {
    children: ReactNode
}

export interface AuthorDataContext {
    authorData: IAuthor
    authorController: {
        cleanUpdateData: (newData: any) => void
    }
}