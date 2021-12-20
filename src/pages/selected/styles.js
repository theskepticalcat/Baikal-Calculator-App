import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {colors, screen} from './../../styles/vars';


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
`;


export const SelectedBlock = styled.section`
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans';
    padding: 9.7em 0 1em 6.9em;

    @media screen and (min-width: ${screen.desktop}) {
        padding-top: 11em;
        padding-right: 0;
    }
`;


const Calculate = `
    align-self: end;
    margin-right: .9em;
`;
const Add =`
    margin-bottom: 0;
    margin: 0 1em 0 6.9em;
`;


export const SelectedTip = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    max-width: 40em;
    height: 3.9em;

    background-color: white;
    border-radius: 3px;
    box-shadow: rgba(93, 170, 255, 0.1);
    transition: 0.2s visibility;
    margin-bottom: 1em;
    padding: 0.5em 1em;
    cursor: pointer;

    p {
        color: #5DAAFF;
        margin: auto 1em;
    }
`;


export const SelectedItems = styled.div`
    align-self: flex-end;
    max-height: 63vh;
    width: 89em;

    overflow: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

        table {
            background-color:#F8FAFF;
            border: 1px solid #E2E4EA;
    
            tr {
                text-align: center;
                :not(:last-of-type) {
                    border-right: 1px solid #E2E4EA;
                }
    
                .hidden {
                    display: none;
                }
            }
    
            td,
            th {
                font-family: 'Open Sans';
                font-weight: 600;
                font-size: 1.2rem;
                padding: 0 1em;
            }
    
            .description-img {
                padding: 0;
            }
    
            .description-name {
                min-width: 13em;
                text-align: left;
            }
    
            .description-1 {
                width: 7.5em;
            }
            .description-2 {
                width: 13.5em;
            }
            .description-3 {
                width: 14em;
            }
            .description-4 {
                width: 11.7em;
            }
            .description-5 {
                width: 12.7em;
            }
            .description-6 {
                width: 9.1em;
            }
        }
`;

export const RemoveBtn = styled.button`
    cursor: pointer;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
`;


export const SelectedFooter = styled.footer`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 3.4em;
    right: 6.9em;
`;

export const SelectedFooterBtns = styled.div`
    display: flex;
    align-items: center;
`;


export const AddBtn = styled.button`
    composes: ${btn}
`;

export const CalcBtn = styled.button`
    composes: ${btn}
`;