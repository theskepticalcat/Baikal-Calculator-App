import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [mailError, setMailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [formValid, setFormValid] = useState(false);
    console.log(formValid);



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
        <form className='contact-form'>
            <div className='contact-form__inputs'>
                <div>
                    <input 
                        value={name} 
                        onChange={e => inputHandlerName(e)}
                        type='text'
                        pattern="[a-zA-Z]){2,40}"
                        placeholder='Имя и фамилия'
                        >
                    </input>
                    <p style={{color:'red'}}>{nameError}</p>
                </div>

                <div>
                    <input 
                        value={mail} 
                        onChange={e => inputHandlerMail(e)}
                        type='email' 
                        placeholder='Почта'
                        >
                    </input>
                    <p style={{color:'red'}}>{mailError}</p>
                </div>

                <div>
                    <input 
                        value={phone} 
                        onChange={e => inputHandlerPhone(e)}
                        type='tel' 
                        placeholder='Телефон'
                        >
                    </input>
                    <p style={{color:'red'}}>{phoneError}</p>
                </div>
            </div>

            <div className='contact-form__textarea'>
                <p className='contact-form__textarea--inscription'>Опишите ваш запрос</p>
                <textarea></textarea>
                <button disabled={!formValid} className='btn btn__whide btn__blue' id='submitBtn' type='submit'>Связаться по доставке</button>
                <p>Нажимая на кнопку, вы даете <Link><strong>согласие на обработку</strong></Link><br></br>своих персональных данных</p>
            </div>
        </form>
    )
}

export default ContactForm;
