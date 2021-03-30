import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 5rem;
    background: ${({ theme }) => theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterText = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: .9rem;

    a {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
`