import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import './miniForm.scss';
import whiteArrow from '../../assets/images/white-arrow-right.svg';


const MiniForm = observer(() => {
    const{russianCities} = useContext(Context);
    const{currency} = useContext(Context);

    const[currentRate, setRate] = useState(currency.selectedCurrency.rate); //стэйт курса


    //Выбор валюты и её курса:
    const onChangeCurrency = (e) => {
        let currentCurrency = e.target.value;  //поменяли валюту

        const newCurrency = currency.currency.filter(item =>
            item.name === currentCurrency
        )
        setRate(newCurrency[0].rate);  //меняем состояние
    };


    return (
        <div className='form-wrapper'>
            <div className='form-container'>

                <form className='form'>
                    <div className='form__item'>
                        <input className='form__from' type='text'></input>
                    </div>

                        <div className='form__item'>
                            <select className='form__to' name=''>
                                {russianCities.russianCities.map(city => {
                                    return (
                                        <option className='form__option' key={city.id}>{city.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className='form__item'>
                            <select onClick={onChangeCurrency} className='form__usd' name=''>
                                {currency.currency.map(item => {
                                    return (
                                        <option className='form__option' key={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                    <div className='form__rate'>
                        <p>{currentRate}</p>
                    </div>
                </form>
                
            </div>

            <button className='nextBtn'>Далее <img src={whiteArrow} alt='/'/></button>
        </div>
    )
})

export default MiniForm;