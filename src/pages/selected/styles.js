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

export const SelectedHeader = styled.header`
    display: flex;
`;


export const SelectedTitle = styled.div`
    font-size: 3rem;
    font-weight: 400;
    margin-right: 1.5em;
`;


export const SelectedTip = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    max-width: 45em;
    height: 3.9em;

    background-color: white;
    border-radius: 3px;
    box-shadow: rgba(93, 170, 255, 0.1);
    transition: 0.2s visibility;
    margin-bottom: 1em;
    cursor: pointer;

    &-calculate {
        align-self: end;
        margin-right: .9em;
    }

    &-add {
        margin-bottom: 0;
        margin: 0 1em 0 6.9em;
    }

    p {
        color: #5DAAFF;
        margin-right: 1em;
    }

    img {
        padding: 1.7em;
    }

    &-hidden {
        visibility: hidden;
    }
`;

export const SelectedSpecifications = styled.table`
    align-self: flex-end;
    min-width: 61.8em;
    height: 5.7em;

    background-color:#F8FAFF;
    border: 1px solid #E2E4EA;
    border-radius: 5px;
    margin: 16px 0 10px 17.8em;

    :not(:last-of-type) {
        border-right: 1px solid #E2E4EA;
    }

    .description-1 {
        width: 7.3em;
    }
    .description-2 {
        width: 11.2em;
    }
    .description-3 {
        width: 11em;
    }
    .description-4 {
        width: 9.7em;
    }
    .description-5 {
        width: 11.1em;
    }
    .description-6 {
        width: 9.1em;
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