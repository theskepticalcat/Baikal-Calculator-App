import styled from '@emotion/styled';
import { colors, screen } from './../../styles/vars';


export const ContactFormWrap = styled.form`
    display: grid;
    grid-template-rows: 2fr 3fr;
    font-family: 'Open Sans';
    margin: 5em 5em 2.5em 0;
    align-items: end;

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;

export const ContsctFormItems = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    align-self: flex-end;
    width: 35.8em;
`;

export const ContactFormInput = styled.input`
    width: 17.5em;
    height: 3.7em;
    margin: 0 1em 1em 0;
    padding-left: 1em;

    :active {
        border: 1px solid #FF5D5D;
    }
`;

export const ContactError = styled.p`
    height: 1em;
    margin-top: -1em;
    margin-bottom: 1em;
    color: red;
`;

export const ContactTextareaWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.2em;
`;

export const TextareaInscription = styled.p`
    font-size: 1.2em;
`;
export const ContactTextarea = styled.textarea`
    width: 35.8em;
    height: 7.1em;
    margin-top: 1.4em;
`;

export const ContactBtn = styled.button`
    background-color: ${colors.blue};
    color: white;
    min-width: 18.7em;
    min-height: 3.9em;
    margin: 20px 0;

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

export const Strong = styled.strong`
    color: black;
`;