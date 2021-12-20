import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../pages/_app';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Prompt from '../Prompt';
import ChineseCityInput from './ChineseCityInput';
import RussianCity from './RussianCity';
import Currency from './Currency';
import Rate from './Rate';

import whiteArrow from '../../assets/images/white-arrow-right.svg';

import {FormContainer, 
    Form, 
    Error,
    NextBtn
} from './styles.js';



const MiniForm = observer(() => {
    const {chineseCities} = useContext(Context);
    const [promptActive, setPromptActive] = useState(false);    //состояние подсказки
    const [showError, setShowError] = useState(false);
    const router = useRouter();

    //Появление подсказки:
    useEffect(() => {
        setTimeout(() => {
                setPromptActive(true);
                }, 500)
    }, []);



    //---Собираем выбранные данные, валидация и переход далее---:
    function onToSelect() {
        chineseCities.isSelected === false
        ?
        setShowError(true)
        :
        setShowError(false);

        //router.push('/select');
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

                <NextBtn onClick={onToSelect} type='submit'> Далее <Image src={whiteArrow} alt='/'/></NextBtn>
            </FormContainer>
            {showError === true 
            ? 
            <Error>выберите город</Error>
            :
            ''
            }

            <Prompt active={promptActive} setActive={setPromptActive}/>
        </>
    )
})

export default MiniForm;