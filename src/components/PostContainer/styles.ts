import styled from "styled-components";
import { SPostImageProps } from "../../typescript/types";

export const PostContainer = styled.div`
    width: 58vw;
    margin: 0 auto -2rem auto;
    margin-top: -10rem;
    background: ${({theme}) => theme.colors.white};
    border-radius: .5rem .5rem 0 0;
`
export const PostHeader = styled.section`

`

export const PostBody = styled.div`
    padding: 1rem 4rem;
`

export const PostImage = styled.div<SPostImageProps>`
    width: 100%;
    border-radius: .5rem .5rem 0 0;
    height: 25rem;
    background-image: url(${({src}) => src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
`

export const MetadataLink = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0 .2rem;
`

export const Content = styled.section`
    margin: 2rem 0;
    text-align: justify;
`