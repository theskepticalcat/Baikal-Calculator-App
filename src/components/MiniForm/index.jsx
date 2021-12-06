import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import Prompt from '../Prompt';
import ChineseCityInput from './ChineseCityInput';
import RussianCity from './RussianCity';
import Currency from './Currency';
import Rate from './Rate';

import whiteArrow from '../../assets/images/white-arrow-right.svg';

import {FormContainer, 
    Form, 
    NextBtn
} from './styles.js';



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
        //записываем в miniForm глобальное хранилище
        history.push('/select');
    }


    return (
        <>
            <FormContainer>
                <Form>
                    <ChineseCityInput />
                    <RussianCity />
                    <Currency />
                    <Rate />
                </Form>

                <NextBtn onClick={onToSelect} type='submit'> Далее <img src={whiteArrow} alt='/'/></NextBtn>
            </FormContainer>

            <Prompt active={promptActive} setActive={setPromptActive}/>
        </>
    )
})

export default MiniForm;