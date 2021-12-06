import styled from '@emotion/styled';
import { screen } from '../../styles/vars';


export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;

    @include breakpoint($tablet-bp) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 335px;
        margin: auto;
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 5.7em;
    background-color: white;
    border-radius: 3px;
    align-items: center;

    @include breakpoint($tablet-bp) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px 10px;
        background-color: transparent;
    }
`;

export const NextBtn = styled.button`
    margin-left: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 11.6em;
    height: 4.7em;

    background-color: #5DAAFF;
    color: white;

    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    img {
        margin-left: 1em;
    }

    &:hover {
        background-color: #2876CC;
        color: white;
    }

    @media screen and (max-width: ${screen.tablet}) {
        width: 335px;
        height: 55px;

        margin: 7em auto;
    }
`;