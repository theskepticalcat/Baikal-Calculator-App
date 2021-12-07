import styled from "@emotion/styled";
import {screen, colors } from '../../styles/vars';


export const SelectionHeader = styled.header`
    display: grid;
    grid-template-columns: 5fr 4fr;
    padding: 11.7em 6.9em 1em 6.9em;


    @media screen and (min-width: ${screen.desktop}) {
        padding-top: 18em;
    }

    @media screen and (max-width: ${screen.tablet}) {
        :last-of-type {
            display: none;
        }
        padding: 12em 0 0 0;
        margin-right: 0;
        display: flex;
        width: 100vw;
        text-align: center;
    }
`;

export const SelectionHeaderTitle = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 2.5rem;

    text-align: start;

    @media screen and (max-width: ${screen.tablet}) {
        text-align: left;
        margin-left: 10px;
        width: 100%;
    }
`;


export const Selection = styled.section`
    display: grid;
    grid-template-columns: 5fr 4fr;
    padding: 0 6.9em;
    margin: auto;

    @media screen and (max-width: ${screen.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;

        margin: 0 auto;
        padding: 0.5em;
        max-width: 100vw;
    }
`;

export const SelectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin-right: 10em;

    @media screen and (max-width: ${screen.tablet}) {
        margin: 0;
    }
`;

export const SelectionSearch = styled.form`
    display: flex;
    align-items: center;
    margin-top: 2em;

    @media screen and (max-width: ${screen.tablet}) {
        margin-top: 10em;
    }
`;

export const SelectionInput = styled.input`
    width: 26em;
    height: 4em;
    margin-right: 8px;
    padding-left: 15px;

    ::placeholder{
        color: grey;
    }
`;

export const SelectionItems = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 3em;
    max-height: 33em;
    min-width: 50em;
    
    overflow: scroll;
    -ms-overflow-style: none;


    &::-webkit-scrollbar {
        display: none;
    }
`;

    
export const SelectionItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.5rem;

    background-color: #F8FAFF;
    padding-right: 1.2em;
    border-radius: 3px;
    border: 1px solid #E2E4EA;
    box-shadow: 0px 4px 40px 0 #2e50571a;

    margin: 0 0 4px 0;

    img {
        height: 5em;
    }
`;

export const SelectionItemName = styled.p`
    margin: auto 1em;
`;

export const SelectBtn = styled.button`
    background-color: ${colors.blue};
    color: white;
    margin: 0 9px 0 0;

    width: 9.4em;
    height: 3.2em;

    font-weight: 500;
    font-family: 'Roboto';

    :active {
        background-color: white;
        color: #606F7A;
    }

    &:hover {
        background-color: ${colors.darkBlue};
    }

    &:disabled {
        background-color: ${colors.lightBlue};
    }
`;