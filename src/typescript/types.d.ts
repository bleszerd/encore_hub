import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components'

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