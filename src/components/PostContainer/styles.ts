import styled from "styled-components";
import { SPostImageProps } from "../../typescript/types";

export const PostContainer = styled.div`
    width: 58vw;
    margin: 0 auto -2rem auto;
    margin-top: -10rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: .5rem .5rem 0 0;

    @media(max-width: 520px) {
        width: 98%;
    }
`
export const PostHeader = styled.section`
    @media(max-width: 520px) {
        height: 20rem;
    }
`

export const PostBody = styled.div`
    padding: 1rem 4rem;

    @media(max-width: 520px) {
        width: 100%;
        padding: 1rem 0;
    }
`

export const PostImage = styled.div<SPostImageProps>`
    width: 100%;
    border-radius: .5rem .5rem 0 0;
    height: 25rem;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media(max-width: 520px) {
        height: 20rem;
    }
`
export const PostTitle = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: .6rem;
`

export const PostMetadata = styled.p`
    text-align: end;
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;

    @media(max-width: 520px) {
        text-align: center;
    }
`

export const MetadataLink = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0 .2rem;
`

export const Content = styled.section`
    margin: 2rem 0;
    text-align: justify;

    img {
        background: rgba(0, 0, 0, .6);
        width: calc(100% + 8rem);
        max-width: calc(100% + 8rem);
        margin: 2rem 0 0 -4rem;
        max-height: 35rem;

        @media(max-width: 520px) {
            margin: 1.2rem 0 0 -.5rem;
            width: calc(100vw - .5rem);
        }
    }

    li {
        @media(max-width: 520px) {
            margin: 0 0 0 1rem;
        }
    }

    small {
        margin-bottom: 1rem;
        display: block;
        font-weight: 300;
    }
    
    h2 {
        margin: 1rem 0;
    }

    @media(max-width: 520px) {
        width: 95%;
        margin: 2rem auto;
    }
`