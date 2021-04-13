import styled from "styled-components";

export const AdminPanelContainer = styled.div`
    width: 90%;
    margin: -10rem auto 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: -10rem;
    border-radius: .3rem .3rem 0 0;

    @media(max-width: 520px) {
        width: 98%;
    }
`

export const Welcome = styled.section`
    padding: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.purple};
    border-radius: .3rem .3rem 0 0;
    align-items: center;

    @media(max-width: 520px) {
        
    }
`

export const AuthorWelcome = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    b {
        font-weight: 800;
    }

    @media(max-width: 520px) {
        font-size: .8rem;
    }
`

export const Today = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: .8rem;
`

export const InstantActions = styled.div`
    padding: 1rem;
    display: flex;

    @media(max-width: 520px) {
        width: 100%;   
        padding: 1rem .2rem;
    }
`

export const InstantActionButton = styled.button`
    padding: .6rem 1.3rem;
    margin: 0 .3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.sand};

    @media(max-width: 520px) {
        padding: .3rem .9rem;
    }
`

export const ProfileInfo = styled.div`
    padding: 1rem;
    display: flex;
    background: ${({ theme }) => theme.colors.white};

    @media(max-width: 520px) {
        width: 100%;
        justify-content: center;
    }
`

export const ProfileImageUsername = styled.section`
    flex: .1;
    flex-direction: column;
`


export const ProfileData = styled.section`
    flex: 1;
    margin: 1rem;
`

export const ProfileImage = styled.img`
    width: 12rem;
    border-radius: 20%;

    @media(max-width: 520px) {
        width: 80vw;
        margin-bottom: 1rem;
    }
`

export const AuthorName = styled.input`
    width: 100%;
    max-width: 100%;
    padding: .4rem .2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: .8rem;
    border: none;
    outline: none;

    :hover{
        background: rgba(0, 0, 0, .6);
        padding: .4rem .2rem;
        border-radius: .3rem;    
        color: ${({ theme }) => theme.colors.white};
    }

    :focus{
        background: rgba(0, 0, 0, .6);
        padding: .4rem .2rem;
        border-radius: .3rem;    
        color: ${({ theme }) => theme.colors.white};
    }

    @media(max-width: 520px) {
        border: solid rgba(0, 0, 0, .4) 1px;
        border-radius: .3rem;
        background: rgba(0, 0, 0, .2);
    }
`

export const InfoLabel = styled.p`
    font-weight: 400;
    font-size: 1rem;
    text-align: end;

    b{
        font-weight: 700;
    }
`

export const InstantContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, .6);
`

export const LogoutLabel = styled.p`
    padding-right: 1.3rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;

    @media(max-width: 520px) {
        position: absolute;
        top: 1.25rem;
        right: .75rem;
    }
`