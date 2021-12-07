import styled from "@emotion/styled";


export const InfoQuantity = styled.div`
    display: flex;
    margin-top: 1.7em;

    width: 17.7em;
    height: 3.7em;
`;

export const InfoQuantityTitle = styled.p`
    margin-left: 1em;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.3rem;

    margin: auto auto auto 2px;
`;

export const QuantityAmount = styled.p`
    width: 100%;
    height: 100%;

    text-align: center;
    padding: 1.3em;
`;

export const QuantityButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    width: 11.3em;

    background-color: white;
    border-radius: 3px;

    overflow: hidden;
`;

export const QuantityBtn = styled.button`
    border-radius: 0;
    box-shadow: none;
    padding: auto;
    background-color: rgb(252, 252, 252);
`;