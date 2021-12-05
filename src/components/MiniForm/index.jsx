import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import Prompt from '../Prompt/Prompt';
import ChineseCityInput from './ChineseCityInput';
import RussianCity from './RussianCity';
import Currency from './Currency';
import Rate from './Rate';

import whiteArrow from '../../assets/images/white-arrow-right.svg';
import './index.scss';



const MiniForm = observer(() => {
    const [promptActive, setPromptActive] = useState(false);    //состояние подсказки
    const history = useHistory();


    //Появление подсказки:
    useEffect(() => {
        setTimeout(() => {
                setPromptActive(true);
                }, 500)
    }, []);



    //---Собираем выбранные данные, валидация и переход далее---:
    function onToSelect() {
        //...
        // options.setOptions(selectedOptions);    //записываем в miniForm глобальное хранилище
        history.push('/select');
    }


    return (
        <div>
            <div className='form-container'>
                <form className='form' id='form'>
                    <ChineseCityInput />
                    <RussianCity />
                    <Currency />
                    <Rate />
                </form>

                <button onClick={onToSelect} type='submit' className='form__nextBtn'> Далее <img src={whiteArrow} alt='/'/></button>
            </div>

            <Prompt active={promptActive} setActive={setPromptActive}/>
        </div>
    )
})

export default MiniForm;