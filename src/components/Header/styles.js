import {colors, screen} from '../../styles/vars';
import styled from "@emotion/styled";

export const HeaderBlock = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 3.5em 6.7em 0 6.7em;

    @media screen and (max-width: ${screen.tablet}) {
        padding: 24px 20px;
        background-color: ${colors.lightBlue};
    }
`;


export const LogoAndOptionsWrap = styled.div`
    display: flex;
    align-items: center;

    img {
        cursor: pointer
    }
`;
    

export const BtnWhite = styled.a`
    width: 9.4em;
    height: 3.2em;

    background-color: white;
    font-family: 'Open Sans';
    color: #606F7A;
    font-size: 1.5rem;
    text-align: center;
    padding: 1em;

    cursor: pointer;
    transition: 0.2s;

    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 40px 0 #2e50571a;
    outline: none;
    margin: 0;

    font-weight: 600;
    font-size: 1.1rem;
    font-family: 'Open Sans';
    cursor: pointer;

    &:hover {
        background-color: #5DAAFF;
        color: white;
    }

    @media screen and (max-width: ${screen.desktop}) {
        font-size: 1rem;
    }
`;