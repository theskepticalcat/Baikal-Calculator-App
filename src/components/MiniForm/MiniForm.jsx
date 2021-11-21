import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import Prompt from '../Prompt/Prompt';
import autocomplete from '../../utils/autocomplete';

import whiteArrow from '../../assets/images/white-arrow-right.svg';
import miniArrowImg from '../../assets/images/smallArrowDown.svg';

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


    //Лезем в DOM:
    const selectChinaCity = document.getElementById('form__item--from');
    const selectRusCity = document.getElementById('form__item--to');
    const selectUsd = document.getElementById('form__item--usd');


    //Появление подсказки:
    useEffect(() => {
        setTimeout(() => {
                setPromptActive(true);
                }, 500)
    }, []);


    class DropDownMenu {

        //---Выбор китайского города---:
        static showChineseResults(value) {
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
                        ${shownItems[i].name}
                    </div>
                `
                list += option;
            }
            elem.innerHTML = `${list}`;

            //Выпадающее меню:
            selectChinaCity.classList.add('active');

            //Закрываем по клику на опцию -> в стейт:
            const selectChinaCity_items = selectChinaCity.querySelectorAll('.select-item');
            
            for (let i = 0; i < selectChinaCity_items.length; i++) {
                selectChinaCity_items[i].addEventListener('click', (e) => {
                    setChineseCity(e.currentTarget.textContent.trim());    //записываем в стейт
                    selectChinaCity.classList.remove('active');
                })
            }
        }



        //---Выбор 'куда' и 'валюта'---:
        static onChangeItems(toggleItem) {
            setPromptActive(false);     //деактивируем подсказку
            //Выпадающее меню:
            toggleItem.classList.contains('active') 
            ?
            toggleItem.classList.remove('active')
            :
            toggleItem.classList.add('active');
        }



        //Закрываем по клику на опцию -> в стейт:
        static onOptionRussian(item) {
            setRussianCity(item.name);
        }

        static onOptionCurrency(item) {
            setCurrentCurrency(item.name);
            setRate(item.rate); //меняем курс валюты
        }



        //---Собираем выбранные данные, валидация и переход далее---:
        static onToSelect() {
            //Проверка корректности названия города
            let isCorrect = false;
            for(let item of chineseCities.chineseCities) {
                if(currentChineseCity === item.name) {
                    isCorrect = true;
                }
            }
            //Собираем данные из формы:
            const selectedOptions = {
                from: currentChineseCity,
                to: currentRussianCity,
                currency: currentCurrency,
                rate: currentRate
            }
            options.setOptions(selectedOptions);    //записываем в miniForm глобальное хранилище

            //Rорректно ли заполнено поле:
            if(currentChineseCity === '' || !isCorrect) {
                selectChinaCity.classList.add('error');
                document.getElementById('valid-error').classList.remove('hidden');
            } else {
                selectChinaCity.classList.remove('error');

                localStorage.setItem('selectItem', JSON.stringify(selectedOptions));
                history.push('/select');
            }
        }
    }



    return (
        <div>
            <div className='form-container'>
                <form className='form' id='form'>

                    {/**Откуда: */}
                    <div className='form__item' id='form__item--from' data-state=''>
                        <input 
                            value={currentChineseCity} 
                            onChange={e => DropDownMenu.showChineseResults(e.target.value)}
                            type='text'
                            className='form__item--select__title'
                        ></input>
                        <div className='form__item--select__content' id='chinese-results'></div>
                    </div>


                    {/**Куда: */}
                    <div onClick={() => DropDownMenu.onChangeItems(selectRusCity)} className='form__item' id='form__item--to' data-state=''>
                        <div>{currentRussianCity} <img src={miniArrowImg} alt='open'/></div>

                        <div className='form__item--select__content'>
                            {russianCities.russianCities.map(item => {
                                if (item.name !== currentRussianCity) {
                                    return (
                                        <div onClick={() => DropDownMenu.onOptionRussian(item)} key={item.id} className='select-item'>
                                            <input className='select__input' type="radio"/>
                                            <p className='select__label'>{item.name}</p>
                                        </div>
                                    )
                                }
                            })}
                       </div>
                    </div>


                    {/**Валюта: */}
                    <div onClick={() => DropDownMenu.onChangeItems(selectUsd)} className='form__item' id='form__item--usd' data-state=''>
                        <div>{currentCurrency} <img src={miniArrowImg} alt='open'/></div>

                       <div className='form__item--select__content'>
                            {currency.currency.map(item => {
                                if(item.name !== currentCurrency) {
                                    return (
                                        <div onClick={() => DropDownMenu.onOptionCurrency(item)} key={item.id} className='select-item'>
                                            <input className='select__input' type="radio"/>
                                            <p className='select__label'>{item.name}</p>
                                        </div>
                                    )
                                }
                            })}
                       </div>
                    </div>


                    {/**Курс: */}
                    <div className='form__item form__item--rate'>
                        <p>{currentRate}</p>
                    </div>
                </form>


                <button onClick={DropDownMenu.onToSelect} type='submit' className='form__nextBtn'> Далее <img src={whiteArrow} alt='/'/></button>
            </div>
            <div className='valid-error hidden' id='valid-error'><p>выберите город</p></div>


            <Prompt active={promptActive} setActive={setPromptActive}/>
        </div>
    )
})

export default MiniForm;