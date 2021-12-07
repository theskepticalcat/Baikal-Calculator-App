import styled from "@emotion/styled";
import {colors} from '../../../styles/vars';

const btn = `
    background-color: ${colors.blue};
    color: white;
    margin: 0 9px 0 0;
    border-radius: 5px;

    width: 14.7em;
    height: 3.9em;

    &:hover {
        background-color: ${colors.darkBlue};
    }

    &:disabled {
        background-color: ${colors.lightBlue};
    }
`;

export const BtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ResetBtn = styled.button`
    ${btn}
`;

export const Add = styled.a`
    ${btn};
    padding: 1.45em 5.2em;
    font-weight: 600;
`;