import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');

    const [formValid, setFormValid] = useState(false);
    

    useEffect(() => {
        if(error) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [error]);


    //Проверка инпута с именем:
    const inputHandlerName = (e) => {
        if (!e.target.value) {
            setError('* Введите имя');
        } else {
            setError('');
        }
        setName(e.target.value);
    }

    //Проверка инпута с почтой:
    const inputHandlerMail = (e) => {
        if (e.target.value.length < 5) {
            setError('* Введите почту');
        } else {
            setError ('');
        }
        setMail(e.target.value.toLowerCase());
    }

    //Проверка инпута с телефоном:
    const inputHandlerPhone = (e) => {
        if(e.target.value.length < 6) {
            setError('* Введите номер телефона');
        }
        if(e.target.value.length > 12) {
            setError('* Введите корректный номер');
        }
        setPhone(e.target.value);
        setError('');
    }


    return (
        <form className='contact-form'>
            <div className='contact-form__inputs'>
                <input value={name} onChange={e => inputHandlerName(e)} type='text' placeholder='Имя и фамилия'></input>
                <input value={mail} onChange={e => inputHandlerMail(e)} type='text' placeholder='Почта'></input>
                <input value={phone} onChange={e => inputHandlerPhone(e)} type='tel' placeholder='Телефон'></input>
            </div>
            <p style={{color:'red'}}>{error}</p>

            <div className='contact-form__textarea'>
                <p className='contact-form__textarea--inscription'>Опишите ваш запрос</p>
                <textarea></textarea>
                <button disabled={!formValid} className='btn btn__whide btn__blue' type='submit'>Связаться по доставке</button>
                <p>Нажимая на кнопку, вы даете <Link><strong>согласие на обработку</strong></Link><br></br>своих персональных данных</p>
            </div>
        </form>
    )
}

export default ContactForm;
