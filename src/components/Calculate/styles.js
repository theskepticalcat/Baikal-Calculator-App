import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {colors, screen} from '../../styles/vars';

const display = {
    hidden: css`
        display: none;
    `,
    flex: css`
        display: flex;
    `,
};

export const CalculateBlock = styled.section`
    ${({hidden}) => (true ? display.hidden : display.flex)};
    font-size: 2.1rem;
    font-family: 'Open Sans';
    font-weight: 400;

    display: flex;s
    flex-direction: column;

    position: absolute;
    right: 3.6em;
    bottom: -13.5em;

    align-items: flex-end;
    padding-bottom: 2em;
`;

export const CalculateDetails = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 2fr 1fr;
    grid-gap: 1em;
    text-align: right;
    margin: 0.3em 0;
`;

export const CalculateTotal = styled.div`
    font-size: 2em;
    font-weight: 600;
    margin: 0.3em 0;
`;

export const BtnCalculate = styled.button`
    border-radius: 3px;
    background: transparent;
    border: 1.5px solid ${colors.blue};
    color: ${colors.blue};
    width: 16.6em;
    height: 3.9em;
    margin-right: 0.7em;
`;

export const BtnContact = styled.button`
    background-color: ${colors.blue};
    color: white;
    margin: 20px 0;

    min-width: 18.7em;
    min-height: 3.9em;

    &:hover {
        background-color: ${colors.darkBlue};
    }

    &:disabled {
        background-color: ${colors.lightBlue};
    }

    @media screen and (max-width: ${screen.desktop}) {
        width: 15.7em;
        height: 2.8em;
        margin: 10px 0;
    }
`;