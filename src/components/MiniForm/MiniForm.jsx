import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import Prompt from '../Prompt/Prompt';
import whiteArrow from '../../assets/images/white-arrow-right.svg';
import smallArrowDownSvg from '../../assets/images/smallArrowDown.svg';

import './miniForm.scss';



const MiniForm = observer(() => {
    const{russianCities} = useContext(Context);     //русские города
    const {chineseCities} = useContext(Context);    //китайские города
    const{currency} = useContext(Context);          //курс валют

    const [promptActive, setPromptActive] = useState(false);    //состояние подсказки

    const [currentCurrency, setCurrentCurrency] = useState(currency.selectedCurrency.name);
    const[currentRate, setRate] = useState(currency.selectedCurrency.rate);     //стэйт курса валют
    const[currentRussianCity, setRussianCity] = useState(russianCities.russianCities[0].name);       //стэйт для русского города
    const [currentValue, setValue] = useState('');      //стэйт инпута с выбором китайского города
    (console.log(currentValue));

    //Появление подсказки:
    useEffect(() => {
        setTimeout(() => {
                setPromptActive(true);
                }, 1500)
    }, []);



    //Автокомплит с китайскими городами:
    function showChineseResults(value) {    //value из инпута
        setValue(value);
        setPromptActive(false);

        function chineseAutocomplete (val) {
            if (val === '') {
              return [];
            }
            const arrCities = [];
            chineseCities.chineseCities.forEach(item => {
                arrCities.push(item.name);
            })
    
            var reg = new RegExp(val, 'i');    //регулярка с вводимым значением из инпута
            let result = arrCities.filter(item => item.match(reg));
            return result;
        }

        let elem = document.getElementById('results');
        elem.innerHTML = '';
        let list = '';

        let shownItems = chineseAutocomplete(value);
        for (let i = 0; i < shownItems.length; i++) {
            const li = `<li id='city-name'> ${shownItems[i]} </li>`
            list += li;
        }
        elem.innerHTML = `<ul> ${list} </ul>`;
    }
    

    
    //Выбор куда:
    const onChangeCity = (e) => {
        setPromptActive(false);
        let currentRussian = e.target.value;

        const rusCity = russianCities.russianCities.filter(item =>
            item.name === currentRussian
        )
        setRussianCity(rusCity[0].name);  //меняем состояние
    }


    //Выбор валюты и её курса:
    const onChangeCurrency = (e) => {
        setPromptActive(false);
        let currentCurrency = e.target.value;

        const newCurrency = currency.currency.filter(item =>
            item.name === currentCurrency
        )
        setRate(newCurrency[0].rate);  //меняем состояние
    };



    return (
        <div>
            <div className='form-container'>
                <form className='form'>

                    {/**Откуда: */}
                    <div className='form__item'>
                        <input value={currentValue} onChange={e => showChineseResults(e.target.value)} className='form__item--from' type='text'></input>
                        <div className='form__item--from__results' id='results'></div>
                    </div>

                    {/**Куда: */}
                    <div className='form__item'>
                        <select onClick={e => onChangeCity(e)} className='form__item--to'>
                            <p>{currentRussianCity}</p>
                            <img src={smallArrowDownSvg} alt="выбрать" />
                            {russianCities.russianCities.map(item => {
                                return (
                                    <option className='form__item--to__results' key={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/**Валюта: */}
                    <div className='form__item'>
                        <select onClick={e => onChangeCurrency(e)} className='form__item--usd'>
                            <p>{currentCurrency}</p>
                            <img src={smallArrowDownSvg} alt="выбрать" />
                            {currency.currency.map(item => {
                                return (
                                    <option className='form__item--to__results' key={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/**Курс: */}
                    <div className='form__item form__item--rate'>
                        <p>{currentRate}</p>
                    </div>
                </form>

                <button className='form__nextBtn'>Далее <img src={whiteArrow} alt='/'/></button>
            </div>

            <Prompt active={promptActive} setActive={setPromptActive}/>
        </div>
    )
})

export default MiniForm;