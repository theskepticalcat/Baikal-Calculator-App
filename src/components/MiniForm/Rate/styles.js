import styled from '@emotion/styled';
import {colors, screen} from '../../../styles/vars';

export const Item = styled.div`
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

    @media screen and (max-width: ${screen.tablet}) {
        padding: 47px auto;
        border: none;
        border-radius: 5px;

        width: 162px;
        height: 49px;
    }
`;