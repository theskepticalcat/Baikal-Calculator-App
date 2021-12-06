import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import ContactForm from '../../components/ContactForm/ContactForm';
import './styles.scss';

import instagram from './../assets/images/instagram.png';
import facebook from './../assets/images/facebook.svg';
import whatsapp from './../assets/images/whatsapp.svg';
import wechat from './../assets/images/wechat.png';
import backArrow from './../assets/images/blue-arrow-left.svg';


const Contacts = () => {
    const history = useHistory();

    return (
    <div>
        <div className='contacts-wrapper'>

            <div className='contacts'>
                <div className='contacts__title'>
                    <p>Свяжитесь с нами</p>
                </div>

                <div className='contacts__contact'>
                <p className='contacts__contact--title'>Наши данные:</p>
                    <div className='contacts__contact--contacts'>
                        <div>
                            <p>Наша почта:</p>
                            <p>Телефон:</p>
                        </div>
                        <div>
                            <p>asia@baikalvl.ru</p>
                            <a href='tel: 88002018777'><p>8 800 201-87-77</p></a>
                        </div>
                    </div>
                </div>

                <div className='contacts__socials'>
                    <p className='contacts__socials--title'>Мы в соц. сетях:</p>
                    
                    <div className='socials'>
                        <div className='socials__instagram'>
                            <img src={instagram} alt='instagram'/>
                            <p>Instagram</p>
                        </div>
                        <div className='socials__whatsapp'>
                            <img src={whatsapp} alt='whatsapp'/>
                            <p>Whatsapp</p>
                        </div>
                        <div className='socials__facebook'>
                            <img src={facebook} alt='facebook'/>
                            <p>Facebook</p>
                        </div>
                        <div className='socials__wechat'>
                            <img src={wechat} alt='Вы не сможете его скачать'/>
                            <p>Wechat</p>
                        </div>
                    </div>
                </div>
            </div>


            <ContactForm />


            <div>
                <div className='contacts-modal'>
                    <div className='contacts-modal__mail'><p>asia@baikalvl.ru</p></div>
                    <div className='contacts-modal__tel'><a href='tel: 88002018777'><p>8 800 201-87-77</p></a></div>
                    <div><button className='contacts-modal__btn'>Связаться</button></div>
                </div>

                <div className='contacts-modal__footer'>
                    <p>Мы в соц. сетях:</p>
                    <div>
                        <img src={instagram} alt="instagram" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={facebook} alt="facebook" />
                        <img src={wechat} alt="wechat" />
                    </div>
                </div>
            </div>

        </div>

        <footer>
            <p onClick={() => history.goBack()} className='back-link'><img src={backArrow} alt='/'/>Назад</p>
        </footer>
    </div>
    )
}

export default Contacts;