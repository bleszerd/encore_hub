import styled from "styled-components";
import {SiTwitter, SiGithub, SiLinkedin} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'

import { SAuthorName } from "../../typescript/types";

export const AllAluthorsContainer = styled.ul`
    margin: -10rem auto 0 auto;
    background: ${({ theme }) => theme.colors.white};
    width: 90%;
    border-radius: .3rem;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AuthorCard = styled.li`
    width: 100%;
    margin: .6rem 0;
    padding: .6rem;
    display: flex;
    border-radius: .3rem;

    :nth-child(2n){
        background: rgba(0, 0, 0, .2);
        justify-content: flex-end;
    }
`

export const AuthorNamePhoto = styled.div`
    display: flex;
`

export const AuthorPhoto = styled.img`
    width: 16rem;
    border-radius: .3rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .6);
`

export const AuthorName = styled.p<SAuthorName>`
    font-weight: bold;
    font-size: 1.6rem;
    width: 100%;
    padding: 0 1rem;
    text-align: ${({side}) => side == "left" ? "start" : "end"};
    cursor: pointer;
`

export const AuthorUsername = styled.p<SAuthorName>`
    text-align: ${({side}) => side == "left" ? "start" : "end"};
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1rem;
    margin: -.6rem 0 1rem 0%;
    color: ${({ theme }) => theme.colors.text};
    opacity: .4;
    font-weight: 600;
`

export const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AuthorBio = styled.p`
    margin: .2rem .8rem;
`

export const SocialBar = styled.div<SAuthorName>`
    display: flex;
    margin: 0 1rem;
    padding: 2rem 1rem;
    justify-content: ${({side}) => side == "left" ? "flex-start" : "flex-end"};
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
    color: ${({theme}) => theme.colors.text};
`

export const SocialGithub= styled(SiGithub)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.text};
    
`

export const SocialTwitter = styled(SiTwitter)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.text};
`

export const SocialLinkedIn = styled(SiLinkedin)`
    font-size: 2.3rem;
    color: ${({theme}) => theme.colors.text};
    padding: .2rem 0 0 0;
`