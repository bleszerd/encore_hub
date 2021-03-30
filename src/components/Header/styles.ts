import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-image: linear-gradient(to bottom right, ${({theme}) => `${theme.colors.purple}, ${theme.colors.purpink}, ${theme.colors.candy}, ${theme.colors.sunset}, ${theme.colors.sand}, ${theme.colors.yellow}`});
`

export const LogoSection = styled.section`
`

export const LogoTitle = styled.a`
    font-weight: 800;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.6rem;
    cursor: pointer;
`

export const NavigationSection = styled.section`
`

export const NavigationButton = styled.button`
    margin: 0 0 0 1rem;
    font-size: 1rem;
    background: none;
    border: none;
    font-weight: 800;
    outline: none;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
    text-shadow: 0 0 1px black;
`