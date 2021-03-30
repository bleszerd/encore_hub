import styled from "styled-components";
import { SAuthorImage } from "../../typescript/types";

export const AuthorContentContainer = styled.div`
    max-width: 46vw;
    margin: 0 auto -2rem auto;
    margin-top: -10rem;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AuthorContentImage = styled.div<SAuthorImage>`
    width: 29rem;
    height: 29rem;
    border-radius: .5rem;
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 10;
`

export const AuthorContentBody = styled.section`
    background: ${({theme}) => theme.colors.white};
    width: 100%;
    margin-top: -10rem;
    margin-bottom: 2.1rem;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    align-items: center;
    padding: 10.5rem 3rem 1rem 3rem;
    flex-direction: column;
`

export const AuthorName = styled.h2`

`

export const AuthorDescription = styled.p`
    margin-top: 2rem;
    text-align: justify;
`