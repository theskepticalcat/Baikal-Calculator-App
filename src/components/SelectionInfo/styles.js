import { screen, colors } from '../../styles/vars';
import styled from "@emotion/styled";


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
        max-height: 48px;
    }

    p {
        margin: 0 0.7em 0 1em;
    }
`;