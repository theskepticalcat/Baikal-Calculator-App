import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, screen } from './vars';

export const GlobalStyles = `
    html {
        font-size: 62.5%;

        @media screen and (min-width: ${screen.desktop}) {
            font-size: 72.5%;
        }
    }
    body {
        overflow: hidden;
        background-color: ${colors.lightBlue};
        font-size: 1em;

        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;

        @media screen and (max-width: ${screen.tablet}) {
            overflow: auto;
        }
    }

    .overflow {
        overflow: auto;
    }


    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a:focus { outline: none; }

    a {
        text-decoration: none;
    }

    p {
        margin: 0;
        color: ${colors.grey};
    }

    .blueBackground {
        background-color: ${colors.lightBlue};
    }


    input,
    textarea,
    button {
        border: none;
        border-radius: 3px;
        box-shadow: 0px 4px 40px 0 #2e50571a;
        outline: none;
        margin: 0;
    }

    input {
        box-shadow: none;
        font-size: 1.1rem;

        ::placeholder {
            color: ${colors.lightGrey};
            opacity: 0.5;

            font-size: 1.1rem;
            font-weight: 400;
            font-family: 'Open Sans';
        }
    }


    ul, 
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .hidden {
        display: none;
    }

    .button {
        font-weight: 600;
        font-size: 1.1rem;
        font-family: 'Open Sans';
        cursor: pointer;

        @media screen and (max-width: ${screen.desktop}) {
            font-size: 1rem;
        }
    }
`;