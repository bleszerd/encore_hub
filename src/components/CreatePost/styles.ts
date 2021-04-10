import styled from "styled-components";

export const CreatePostContainer = styled.form`
    width: 90%;
    margin: -10rem auto 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .3rem;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleImageContainer = styled.div`
    display: flex;
    width: 90%;
`

export const TitleInput = styled.input`
    width: 90%;
    padding: .6rem 1rem; 
    outline: none;
    border: none;
    background: rgba(0, 0, 0, .2);
    border-radius: .3rem;

    :first-of-type{
        border-radius: .3rem;
        flex: 1;
    }

    :last-of-type {
        border-radius: .3rem;
        margin-left: .3rem;
        flex: .4;
    }
`

export const TagSection = styled.div`
    width: 90%;
    display: flex;
    margin: .8rem 0 4rem 0;
`

export const TagLabel = styled.input`
    margin: 0 .3rem 0 0;
    border-radius: .3rem 0 0 .3rem;
    background: ${({ theme }) => theme.colors.purpink};
    outline: none;
    border: none;
    text-align: center;
    max-width: 6rem;
    font-size: .8rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.candy};
    padding: .6rem .4rem;

    ::placeholder{
        color: ${({ theme }) => theme.colors.white};
    }
`

export const PostTextInput = styled.textarea`
    width: 90%;
    border-radius: .3rem;
    padding: 1rem;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, .2);
    min-height: 60vh;
    resize: vertical;
`

export const PublishChannelContainer = styled.div`
    width: 90%;
    margin: .8rem 0;
    display: flex;
    justify-content: space-between;
`

export const ChannelSelector = styled.select`
    width: 20%;
    padding: .6rem 1rem; 
    outline: none;
    border: none;
    background: rgba(0, 0, 0, .2);
    border-radius: .3rem;
    border-right: solid transparent .7rem;
`

export const PublishChannelOption = styled.option`

`

export const PublishButton = styled.button`
    width: 20%;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    border-radius: .3rem;
    font-weight: 700;
`

export const PostPreview = styled.div`
    width: 90%;
    margin-top: 12rem;
`