import styled from "@emotion/styled/types/base";

export const TitleWrapper = styled.header`
    display: flex;
`;

export const Content = styled.div`
    font-size: 3rem;
    font-weight: 400;
    margin-right: 1.5em;
`;

export const Tip = styled.div`
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