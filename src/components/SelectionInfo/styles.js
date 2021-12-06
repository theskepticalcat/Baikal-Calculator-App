import { screen, colors } from '../../styles/vars';
import styled from "@emotion/styled";
import { css } from '@emotion/react';


const btn = css`
    background-color: ${colors.blue};
    color: white;
    margin: 0 9px 0 0;
    border-radius: 5px;

    width: 14.7em;
    height: 3.9em;

    &:hover {
        background-color: ${colors.darkBlue};
    }

    &:disabled {
        background-color: ${colors.lightBlue};
    }
`;


export const InfoWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    @media screen and (max-width: ${screen.tablet}) {
        margin-top: 5em;
        margin-left: 10em;
        margin-bottom: 5em;
        width: 35em;
    }
`;


export const InfoEmpty = styled.div`
    display: flex;
    justify-content: center;
            
    p {
        font-size: 2rem;
        margin: auto;
    }

    .hidden {
        display: none;
    }

    @media screen and (max-width: ${screen.tablet}) {
        margin: 10em 0;
    }
`;


export const InfoSelectedItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    width: 25em;
    height: 4em;
    border-radius: 3px;
    background-color: #F8FAFF;

    img {
        width: 5em;
        height: 100%;
    }

    p {
        margin: 0 0.7em 0 1em;
    }
`;

export const InfoQuantity = styled.div`
    display: flex;
    margin-top: 1.7em;

    width: 17.7em;
    height: 3.7em;
`;

export const InfoQuantityTitle = styled.p`
    margin-left: 1em;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.3rem;

    margin: auto auto auto 2px;
`;

export const QuantityAmount = styled.p`
    width: 100%;
    height: 100%;

    text-align: center;
    padding: 1.3em;
`;

export const QuantityButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    width: 11.3em;

    background-color: white;
    border-radius: 3px;

    overflow: hidden;
`;

export const QuantityBtn = styled.button`
    border-radius: 0;
    box-shadow: none;
    padding: auto;
    background-color: rgb(252, 252, 252);
`;


export const InfoSpecifications = styled.div`
    margin-top: 1.7em;
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Open Sans';
`;

export const SpecificationsItem = styled.input`
    display: flex;
    width: 22.7em;
    height: 3.7em;

    background-color: white;
    box-shadow: 0px 4px 40px 0 #2e50571a;

    margin-bottom: 1em;
    padding-left: 1.3em;

    ::placeholder {
        color: #B7B7B7;
    }
`;

export const ResetBtn = styled.button`
    composes: ${btn}
`;

export const Add = styled.a`
    composes: ${btn}
`;