import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import Prompt from '../Prompt/Prompt';
import whiteArrow from '../../assets/images/white-arrow-right.svg';

import './miniForm.scss';



const MiniForm = observer(() => {
    const{russianCities} = useContext(Context);     //русские города
    const {chineseCities} = useContext(Context);    //китайские города
    const{currency} = useContext(Context);          //курс валют
    const{options} = useContext(Context);           //выбранные опции

    const [promptActive, setPromptActive] = useState(false);    //состояние подсказки

    const [currentCurrency, setCurrentCurrency] = useState(currency.selectedCurrency.name); //стэйт выбора валюты
    const [currentRate, setRate] = useState(currency.selectedCurrency.rate);     //стэйт курса валют
    
    const [currentRussianCity, setRussianCity] = useState(russianCities.russianCities[0].name);     //стэйт для русского города
    const [currentChineseCity, setChineseCity] = useState('');      //стэйт китайского города


    const history = useHistory();


    //Лезем в DOM
    const selectChinaCity = document.getElementById('form__item--from');
    const selectRusCity = document.getElementById('form__item--to');
    const selectUsd = document.getElementById('form__item--usd');



    //Появление подсказки:
    useEffect(() => {
        setTimeout(() => {
                setPromptActive(true);
                }, 1500)
    }, []);


    //---Автокомплит---:
    function autocomplete(val, arr) {
        if (val === '') {
          return [];
        }

        var reg = new RegExp(`^${val}`, 'i');   //регулярка со значением из инпута
        let result = arr.filter(item => item.name.match(reg));
        return result;
    }


    //---Выбор китайского города---:
    function showChineseResults(value) {
        const selectChinaCity_title = selectChinaCity.querySelector('.form__item--select__title');
        
        setChineseCity(value);
        setPromptActive(false);

        if (selectChinaCity.classList.contains('error')) {
            selectChinaCity.classList.remove('error');
        }

        let elem = document.getElementById('chinese-results');  //блок с результатами
        elem.innerHTML = '';
        let list = '';

        let shownItems = autocomplete(value, chineseCities.chineseCities);
        
        //Рисуем эл-ты:
        for (let i = 0; i < shownItems.length; i++) {
            const option = `
                <div class="select-item">
                    <input type='radio' class='select__input' id='city-name'></input>
                    <label for='city-name' className='select__label'>${shownItems[i].name}</label>
                </div>
            `
            list += option;
        }
        elem.innerHTML = `${list}`;
        
        //Выпадающее меню:
        selectChinaCity_title.oninput = () => {
            selectChinaCity.setAttribute('data-state', 'active');
        }

        //Закрываем по клику на опцию и сохраняем в стейт:
        const selectChinaCity_items = selectChinaCity.querySelectorAll('.select-item');
        for (let i = 0; i < selectChinaCity_items.length; i++) {
            selectChinaCity_items[i].addEventListener('click', (e) => {
                setChineseCity(e.currentTarget.textContent.trim());    //записываем в стейт
                selectChinaCity.setAttribute('data-state', '');
            })
        }
    }
    



    //---Выбор куда---:
    function onChangeRussianCity() {
        setPromptActive(false);     //деактивируем подсказку
        const selectRusCity_title = selectRusCity.querySelector('.form__item--select__title');

        //Выпадающее меню:
        selectRusCity_title.addEventListener('click', () => {
            selectRusCity.setAttribute('data-state', 'active');
        })
    }
    //Закрываем по клику на опцию и СОХРАНЕНИЕ В СТЕЙТ:
    function onOptionRussian(item) {   //получаем выбранный айтем из списка русских городов
        selectRusCity.setAttribute('data-state', '');
        setRussianCity(item.name);
    }




    //---Выбор валюты и её курса---:
    const onChangeCurrency = () => {
        setPromptActive(false);     //деактивируем подсказку
        const selectUsd_title = selectUsd.querySelector('.form__item--select__title');

        //Выпадающее меню:
        selectUsd_title.addEventListener('click', () => {
                selectUsd.setAttribute('data-state', 'active');
        })

    }
    //Закрываем по клику:
    function onOptionCurrency(item) {   //получаем выбранный айтем из списка валют
        selectUsd.setAttribute('data-state', '');
        setCurrentCurrency(item.name);  //в стейт
        setRate(item.rate); //меняем курс валюты:
    }



    //---Собираем выбранные данные, валидация и переход далее---:
    const onToSelect = () => {
        const selectedOptions = {       //собираем выбранные данные
            from: currentChineseCity,
            to: currentRussianCity,
            currency: currentCurrency
        }
        options.setOptions(selectedOptions);    //записываем в miniForm глобальное хранилище

        if(currentChineseCity === '') {         //заполнено ли поле
            selectChinaCity.classList.add('error');
            document.getElementById('valid-error').classList.remove('hidden');
        } else {
            selectChinaCity.classList.remove('.error');
            localStorage.setItem('selectItem', JSON.stringify(selectedOptions));
            history.push('/select');
        }
    }



    return (
        <div>
            <div className='form-container'>
                <form className='form'>

                    {/**Откуда: */}
                    <div className='form__item' id='form__item--from' data-state=''>
                        <input 
                            value={currentChineseCity} 
                            onChange={e => showChineseResults(e.currentTarget.value)}  
                            type='text'
                            className='form__item--select__title'
                        ></input>
                        <div className='form__item--select__content' id='chinese-results'></div>
                    </div>


                    {/**Куда: */}
                    <div onClick={onChangeRussianCity} className='form__item' id='form__item--to' data-state=''>
                        <div className='form__item--select__title'>  {/**главный блок с названием*/}
                            {currentRussianCity}
                        </div>

                        <div className='form__item--select__content'>
                            {russianCities.russianCities.map(item => {
                                return (
                                    <div className='select-item' key={item.id}>
                                        <input id="select0" className='select__input' type="radio"/>
                                        <label onClick={() => onOptionRussian(item)} htmlFor="select0" className='select__label'>{item.name}</label>
                                    </div>
                                )
                            })}
                       </div>
                    </div>


                    {/**Валюта: */}
                    <div onClick={onChangeCurrency} className='form__item' id='form__item--usd' data-state=''>
                        <div className='form__item--select__title'>  {/**главный блок с названием*/}
                            {currentCurrency}
                        </div>

                       <div className='form__item--select__content'>
                            {currency.currency.map(item => {
                                return (
                                    <div className='select-item' key={item.id}>
                                        <input id="select0" className='select__input' type="radio"/>
                                        <label onClick={() => onOptionCurrency(item)} htmlFor="select0" className='select__label'>{item.name}</label>
                                    </div>
                                )
                            })}
                       </div>
                    </div>


                    {/**Курс: */}
                    <div className='form__item form__item--rate'>
                        <p>{currentRate}</p>
                    </div>
                </form>


                <button onClick={onToSelect} type='submit' className='form__nextBtn'> Далее <img src={whiteArrow} alt='/'/></button>
            </div>
            <div className='valid-error hidden' id='valid-error'><p>заполните поле</p></div>


            <Prompt active={promptActive} setActive={setPromptActive}/>
        </div>
    )
})

export default MiniForm;