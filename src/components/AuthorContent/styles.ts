import styled from "styled-components";
import {SiTwitter, SiGithub, SiLinkedin} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'

import { SAuthorImage } from "../../typescript/types";

export const AuthorContentContainer = styled.div`
    max-width: 46vw;
    margin: -10rem auto -2rem auto;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: 520px) {
        max-width: 97%;
        width: 97%;
    }
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

    @media(max-width: 520px) {
        width: 17rem;
        height: 17rem;
    }
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

    @media(max-width: 520px) {
        width: 100%;
        padding: 10.5rem 1rem 1rem 1rem;
    }
`

export const AuthorName = styled.h2`
    margin-bottom: 1rem;
`

export const AuthorDescription = styled.p`
    margin-top: 2rem;
    text-align: justify;
`

export const SocialBar = styled.div`
    display: flex;
    background: ${({theme}) => theme.colors.text};
    width: 100%;
    padding: 1rem;
    justify-content: center;
`

export const SocialBarColumn = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 .4rem;
    cursor: pointer;
    align-items: center;
`

export const SocialInstagram = styled(RiInstagramFill)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.white};
`

export const SocialGithub= styled(SiGithub)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.white};
    
`

export const SocialTwitter = styled(SiTwitter)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.white};
`

export const SocialLinkedIn = styled(SiLinkedin)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.white};
    padding: .2rem 0 0 0;
`