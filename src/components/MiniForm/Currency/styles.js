import styled from '@emotion/styled';
import {colors, screen} from '../../../styles/vars';

export const Item = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 9.6em;
    height: 4.7em;

    background-color: white;
    border-right: 1px solid #DEDEDE;
    cursor: pointer;

    font-family: 'Roboto';
    font-size: 1em;
    font-weight: 500;
    color: ${colors.grey};

    img {
        opacity: .5;
        margin-left: 0.5em;
    }

    @media screen and (max-width: ${screen.tablet}) {
        top: 45px; 
    }
    @media screen and (min-width: ${screen.desktop}) {
        top: 60px;
    }

    :hover {
        background-color: rgba(248, 248, 248, 0.521);
    }

    @media screen and (max-width: ${screen.tablet}) {
        padding: 47px auto;
        border: none;
        border-radius: 5px;

        width: 162px;
        height: 49px;
    }
`;

export const SelectedItem = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px 16px;

    cursor: pointer;

    font-family: 'Roboto';
    font-size: 1em;
    font-weight: 500;
    color: ${colors.grey};

    @media screen and (max-width: ${screen.tablet}) {
        text-align: center;
    }
`;


export const DropDownMenu = styled.div`
    position: absolute;
    top: 52px;

    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 16.7em;
    overflow: scroll;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.3s ease-out;
    
    z-index: 8;
    cursor: pointer;
`;


export const DropDownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5em;

    cursor: pointer;
    border-top: 1px solid #DEDEDE;

    p {
        display: flex;
        align-items: center;
        transition: all 0.2s ease-out;
    }
`;