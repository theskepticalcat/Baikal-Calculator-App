import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '../../components/ContactForm';

import instagram from './../../assets/images/instagram.png';
import facebook from './../../assets/images/facebook.svg';
import whatsapp from './../../assets/images/whatsapp.svg';
import wechat from './../../assets/images/wechat.png';
import backArrow from './../../assets/images/blue-arrow-left.svg';

import { ContactsWrapper, 
    ContactsBlock, 
    ContactsTitle, 
    ContactsTitleSecond, 
    MainContacts,  
    ContactsContacts, 
    ContactsSocials, 
    SocialsTitle, 
    Socials, 
    Social, 
    ContactsModal,
    ContactsModalBtn,
    ContactsModalFooter,
    Footer,
    FooterBackLink
} from './styles';


const Contacts = () => {
    const router = useRouter();

    return (
    <>
        <ContactsWrapper>

            <ContactsBlock>
                <ContactsTitle>Свяжитесь с нами</ContactsTitle>

                <MainContacts>
                    <ContactsTitleSecond>Наши данные:</ContactsTitleSecond>
                    <ContactsContacts>
                        <div>
                            <p>Наша почта:</p>
                            <p>Телефон:</p>
                        </div>
                        <div>
                            <p>asia@baikalvl.ru</p>
                            <Link href='tel: 88002018777'><p>8 800 201-87-77</p></Link>
                        </div>
                    </ContactsContacts>
                </MainContacts>

                <ContactsSocials>
                    <SocialsTitle>Мы в соц. сетях:</SocialsTitle>
                    
                    <Socials>
                        <Social>
                            <Image src={instagram} alt='instagram'/>
                            <p>Instagram</p>
                        </Social>
                        <Social>
                            <Image src={whatsapp} alt='whatsapp'/>
                            <p>Whatsapp</p>
                        </Social>
                        <Social>
                            <Image src={facebook} alt='facebook'/>
                            <p>Facebook</p>
                        </Social>
                        <Social>
                            <Image src={wechat} alt='Вы не сможете его скачать'/>
                            <p>Wechat</p>
                        </Social>
                    </Socials>
                </ContactsSocials>
            </ContactsBlock>


            <ContactForm />


            <>
                <ContactsModal>
                    <div className='contacts-modal__mail'><p>asia@baikalvl.ru</p></div>
                    <div className='contacts-modal__tel'><a href='tel: 88002018777'><p>8 800 201-87-77</p></a></div>
                    <ContactsModalBtn>Связаться</ContactsModalBtn>
                </ContactsModal>

                <ContactsModalFooter>
                    <p>Мы в соц. сетях:</p>
                    <div>
                        <Image src={instagram} alt="instagram" />
                        <Image src={whatsapp} alt="whatsapp" />
                        <Image src={facebook} alt="facebook" />
                        <Image src={wechat} alt="wechat" />
                    </div>
                </ContactsModalFooter>
            </>


        </ContactsWrapper>

        <Footer>
            <FooterBackLink onClick={() => router.back()}>
                <Image src={backArrow} alt='/'/>
                Назад
            </FooterBackLink>
        </Footer>
    </>
    )
}

export default Contacts;