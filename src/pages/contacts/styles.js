import styled from "@emotion/styled";
import { screen } from './../../styles/vars';


export const ContactsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10em 6.9em;

    @media screen and (max-width: ${screen.tablet}) {
       margin: auto;
    }

    @media screen and (min-width: ${screen.desktop}) {
        margin-top: 18em;
    }
`;


//Десктоп:
export const ContactsBlock = styled.section`
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-family: 'Open Sans';
    margin-right: 5em;

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;


export const ContactsTitle = styled.p`
    font-size: 5rem;
`;
        
export const MainContacts = styled.section`
    margin-top: 1.4em;
`;

export const ContactsTitleSecond = styled.p`
    font-size: 2.5rem;
`;
export const ContactsContacts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.8em;

    font-size: 1.8rem;
    font-family: 'Roboto';

    a {
        color: #606F7A;
    }
    p {
        margin-top: 1.4em;
    }
`;


export const ContactsSocials = styled.section`
    margin-top: 4.4em;
    font-family: 'Roboto';
`;

export const SocialsTitle = styled.p`
    font-size: 2.5rem;
`;

export const Socials = styled.div`
    width: 30.7em;
    margin-top: 2.7em;
    font-size: 1.8rem;

    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 2.5em;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    width: auto;

    img {
        max-width: 3.5em;
        max-height: 3.5em;

        margin-right: 1.7em;
    }
`;



//Для мобильной версии:
export const ContactsModal = styled.section`
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Open Sans';
    margin: 35vh auto;
    
    p, 
    a {
        font-size: 2rem;
        font-weight: 300;
    
        margin-top: 24px;
    }
`;
    
export const ContactsModalBtn = styled.button`
    width: 9.4em;
    height: 3.2em;
    background-color: #FFFFFF;
            
    font-weight: 600;
    font-size: 1.2rem;
    color: #606F7A;
                
    margin-top: 2.5em;
    cursor: pointer;
    transition: 0.2s;
            
    &:hover {
        background-color: #5DAAFF;
        color: white;
    }
`;

export const ContactsModalFooter = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;

    font-size: 2.8rem;
    font-weight: 300;
    font-family: 'Open Sans';
    margin-bottom: 2.1em;
    text-align: center;

    :not(:last-of-type) {
        margin: 24px 15px 0 0;
    }

    img {
        box-shadow: 0px 4px 40px 0 #2e50571a;
        cursor: pointer;
    }

    @media screen and (max-width: ${screen.tablet}) {
        display: flex;
    }
`;


export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    margin: 0 6.9em 3.7em 0;

    @media screen and (max-width: ${screen.tablet}) {
        display: none;
    }
`;

export const FooterBackLink = styled.a`
    font-weight: 600;
    font-size: 1.6rem;
    font-family: 'Open Sans';

    color: #5DAAFF;
    cursor: pointer;
    outline: none;

    img {
        margin-right: 20px;
    }
`;