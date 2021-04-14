import styled from "styled-components";
import { SImageProps } from "../../typescript/types";

export const ContentCardContainer = styled.div`
    width: 25rem;
    height: 20rem;
    cursor: pointer;
    border-radius: .5rem;

    @media(max-width: 520px) {
        width: 100%;
    }
`

export const Image = styled.div<SImageProps>`
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    border-radius: .5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const CardHeaderSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    text-overflow: ellipsis;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.colors.sand};

    ::-webkit-scrollbar {
        width: .2rem;
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.sand} ;
        border-radius: 6px;
    }
`

export const CardAuthorSection = styled.section`
    display: flex;
    height: 20%;
    align-items: flex-end;
    justify-content: flex-end;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 20;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 1.2rem;
`

export const CardTitle = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
`

export const CardAuthorInfo = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
`

export const AuthorLink = styled.a`
    font-weight: 600;
    margin: 0 0 0 .2rem;
`

export const ImageEffect = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    border-radius: .5rem;
    z-index: 25;
`