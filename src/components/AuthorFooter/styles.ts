import styled from "styled-components";
import { SAuthorImage } from "../../typescript/types";
import {SiTwitter, SiGithub, SiLinkedin} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'

export const AuthorFooterContainer = styled.div`
    background: ${({theme}) => theme.colors.text};
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AuthorImage = styled.div<SAuthorImage>`
    width: 12rem;
    height: 12rem;
    background-image: url(${({src}) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: .5rem;
    margin: 0 .5rem;
`

export const AuthorDetailsContainer = styled.div`

`

export const AuthorName = styled.a`
    margin: 0 .5rem;
    color: ${({theme}) => theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
    font-weight: 800;
`
export const AuthorBio = styled.p`
    margin: 0 .5rem 1rem .5rem;
    max-width: 40vw;
    color: ${({theme}) => theme.colors.white};
    opacity: .6;
    font-weight: 300;
`

export const SocialBar = styled.div`
    display: flex;
    margin: 0 4rem;
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