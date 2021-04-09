import styled from "styled-components";

export const PageNavigationContainer = styled.div`
    overflow: hidden;
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 1.2rem 0;
`

export const NavigationButton = styled.div<{active?: boolean}>`
    margin: .25rem;
    background: ${({active}) => active ? ({theme}) => theme.colors.purple : ({theme}) => theme.colors.white};
    width: 2rem;
    height: 2rem;
    padding: 1.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .4);
    cursor: pointer;

`

export const PageLabel = styled.p<{active?: boolean}>`
    color: ${({active}) => active ? ({theme}) => theme.colors.white : ({theme}) => theme.colors.purple};
    font-weight: 800;
    font-size: 1.2rem;
`