import styled from "@emotion/styled";
import { screen } from '../../styles/vars';

export const PromptItem = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 23.5em;
    height: 3.9em;

    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1em;

    color: #5DAAFF;
    background-color: white;

    border-radius: 3px;
    margin-top: 1.7em;


    &.notActive {
        transform: scale(0);
    }
    &.active {
        transform: scale(1);
        animation: up linear 2s;
    
        @keyframes up{
            0% {
                transform: translateY(+50px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;

export const PromptDescription = styled.p`
    padding-right: 1.3em;
`;