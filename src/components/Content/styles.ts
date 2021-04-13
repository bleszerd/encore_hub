import styled from "styled-components";

export const ContentConatainer = styled.div`
    display: grid;
    width: 76%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-row-gap: .6rem;
    grid-column-gap: .3rem;
    margin: -10rem auto 0 auto;

    @media(max-width: 520px) {
        width: 98%;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
    }
`