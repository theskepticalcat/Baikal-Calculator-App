import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';

import MiniForm from '../components/MiniForm/MiniForm';

import '../styles/mainPage.scss';


const MainPage = observer(() => {
    return (
        <div className='main-page'>
            <div className='main-page__mini-form'>
                <p className='main-page__mini-form--title'>Рассчитайте<br></br>стоимость доставки из Китая</p>
                <div className='main-page__mini-form--inscriptions'>
                    <p>Откуда</p>
                    <p>Куда</p>
                    <p>Валюта</p>
                    <p>Курс</p>
                </div>
                <MiniForm/>
            </div>
        </div>
    )
})

export default MainPage;