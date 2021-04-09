import styled from "styled-components";

export const LoginFormContainer = styled.form`
    width: 50vw;
    margin: -10rem auto 0 auto;
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    border-radius: .3rem;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .4);

    div input {
        border-radius: .3rem 0 0 .3rem;
        flex: 1;
    }
`

export const AuthorLogin = styled.p`
    width: 80%;
    margin: 1rem auto;
    font-size: .9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    opacity: .8;
`

export const FullWideInput = styled.input`
    width: 80%;
    margin: .2rem auto;
    height: 2.6rem;
    max-height: 2.6rem;
    background: rgba(0, 0, 0, .2);
    border: none;
    outline: none;
    border-radius: .3rem;
    padding: .2rem 1rem;
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
`

export const MultipleColumnsDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
    margin: 0 auto;
`

export const ButtonLogin = styled.button`
    flex: .2;
    outline: none;
    border: none;
    height: 2.6rem;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    border-radius: 0 .3rem .3rem 0;
`