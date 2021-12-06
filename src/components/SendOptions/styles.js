import styled from "@emotion/styled";
import { screen } from '../../styles/vars';


export const Options = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    cursor: pointer;

    border-radius: 5px;
    margin-left: 60px;
    padding-left: 1.2em;

    font-size: 17px;
    font-weight: 500;
    font-family: 'Roboto';

    :last-of-type {
        margin-left: .3em;
    }

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;


export const OptionsPen = styled.div`
    margin-right: .3em;

    img {
        width: 17px;
        margin: auto 7px;
    }
`;


const OptionsActive = styled.div`
    background-color: white;
    box-shadow: 0px 4px 40px 0 #2e50571a;
`;