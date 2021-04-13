import styled from "styled-components";
import { SAuthorImage } from "../../typescript/types";
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'

export const AuthorFooterContainer = styled.div`
    background: ${({ theme }) => theme.colors.text};
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 520px) {
        flex-direction: column;
        height: auto;
        padding: 1rem 0;
    }
`

export const AuthorImage = styled.div<SAuthorImage>`
    width: 12rem;
    height: 12rem;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: .5rem;
    margin: 0 .5rem;

    @media(max-width: 520px) {
        padding: 0 1rem;
    }
`

export const AuthorDetailsContainer = styled.div`

`

export const AuthorName = styled.div`
    margin: 0 .5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
    font-weight: 800;

    @media(max-width: 520px) {
        margin: .5rem;
        text-align: center;
        font-size: 1.6rem;
        justify-content: center;
        display: flex;
    }
`
export const AuthorBio = styled.p`
    margin: 0 .5rem 1rem .5rem;
    max-width: 40vw;
    color: ${({ theme }) => theme.colors.white};
    opacity: .6;
    font-weight: 300;

    @media(max-width: 520px) {
        text-align: center;
        max-width: 100%;
        font-size: .8rem;
    }
`

export const SocialBar = styled.div`
    display: flex;
    margin: 0 4rem;

    @media(max-width: 520px) {
        margin: 2rem 4rem .6rem 4rem;
    }
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
    color: ${({ theme }) => theme.colors.white};
`

export const SocialGithub = styled(SiGithub)`
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.white};
    
`

export const SocialTwitter = styled(SiTwitter)`
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.white};
`

export const SocialLinkedIn = styled(SiLinkedin)`
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.white};
    padding: .2rem 0 0 0;
`