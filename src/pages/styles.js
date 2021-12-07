import { colors, screen } from './../styles/vars';
import styled from "@emotion/styled";


export const Main = styled.section`
    display: flex;
    align-items: center;

    background: url(../assets/images/Background.png) ${colors.background} no-repeat right bottom;
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: ${screen.tablet}) {
        background: ${colors.background};
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`;


export const MiniformWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: auto 6.9em;
`;
    
export const MiniformTitle = styled.p`
    font-size: 3.4rem;
    font-weight: 400;
    font-family: 'Open Sans';
    color: #606F7A;

    margin-bottom: 1.5em;
    
    @media screen and (max-width: ${screen.tablet}) {
        font-size: 3rem;
        font-weight: 300;
        max-width: 335px;
    }
`;

export const MiniformInscriptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 37.4em;
    height: 2em;

    font-family: 'Roboto';
    font-size: 1rem;
    opacity: 0.5;

    p {
        margin-left: 0.7em;
    }

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;