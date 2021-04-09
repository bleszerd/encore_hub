import styled from "styled-components";

export const CreatePostContainer = styled.form`
    width: 90%;
    margin: -10rem auto 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleInput = styled.input`
    width: 90%;
    padding: .6rem 1rem; 
    outline: none;
    border: none;
    background: rgba(0, 0, 0, .2);
    border-radius: .3rem;
`

export const TagSection = styled.div`
    width: 90%;
    display: flex;
    margin: .8rem 0;
`

export const TagLabel = styled.input`
    margin: 0 .2rem 0 0;
    border-radius: .3rem 0 0 .3rem;
    background: rgba(0, 0, 0, .2);
    outline: none;
    border: none;
    text-align: center;
    max-width: 6rem;
    font-size: .8rem;
    padding: .6rem .4rem;
`