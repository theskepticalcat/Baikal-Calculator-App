import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { ContactFormWrap, 
    ContsctFormItems, 
    ContactFormInput, 
    ContactError, 
    ContactTextareaWrap, 
    TextareaInscription, 
    ContactTextarea, 
    ContactBtn,
    Strong }
from './styles';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [mailError, setMailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [formValid, setFormValid] = useState(false);



    useEffect(() => {
        if(nameError || mailError || phoneError) {
            setFormValid(false);
        }
        if(nameError !== '' || mailError !== '' || phoneError !== '') {
            setFormValid(true);
        }
    }, [nameError, mailError, phoneError]);

    

    //Проверка имени:
    const inputHandlerName = (e) => {
        setName(e.target.value);
        name.length > 0 ? setNameError('') : setNameError('*Введите имя');
    }

    //Проверка почты:
    const inputHandlerMail = (e) => {
        setMail(e.target.value.toLowerCase());
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        mail.match(reg) ? setMailError('') : setMailError('* Введите почту');
    }

    //Проверка телефона:
    const inputHandlerPhone = (e) => {
        setPhone(e.target.value);
        phone.length > 5 ? setPhoneError('') : setPhoneError('* Введите номер телефона');
    }


    return (
        <ContactFormWrap>
            <ContsctFormItems>
                <div>
                    <ContactFormInput
                        value={name} 
                        onChange={e => inputHandlerName(e)}
                        type='text'
                        pattern="[a-zA-Z]){2,40}"
                        placeholder='Имя и фамилия'
                        >
                    </ContactFormInput>
                    <ContactError>{nameError}</ContactError>
                </div>

                <div>
                    <ContactFormInput
                        value={mail} 
                        onChange={e => inputHandlerMail(e)}
                        type='email' 
                        placeholder='Почта'
                        >
                    </ContactFormInput>
                    <ContactError>{mailError}</ContactError>
                </div>

                <div>
                    <ContactFormInput
                        value={phone} 
                        onChange={e => inputHandlerPhone(e)}
                        type='tel' 
                        placeholder='Телефон'
                        >
                    </ContactFormInput>
                    <ContactError>{phoneError}</ContactError>
                </div>
            </ContsctFormItems>

            <ContactTextareaWrap>
                <TextareaInscription>Опишите ваш запрос</TextareaInscription>
                <ContactTextarea></ContactTextarea>
                <ContactBtn disabled={!formValid} id='submitBtn' type='submit'>Связаться по доставке</ContactBtn>
                <p>Нажимая на кнопку, вы даете <Link href="#"><Strong>согласие на обработку</Strong></Link><br></br>своих персональных данных</p>
            </ContactTextareaWrap>
        </ContactFormWrap>
    )
}

export default ContactForm;
