import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';

import MiniForm from '../components/MiniForm/MiniForm';

import '../styles/mainPage.scss';


const MainPage = observer(() => {
    return (
        <div className='page-wrapper'>
            <div className='main-page'>
                <div className='main-page__mini-form'>
                    <h3>Рассчитайте<br></br>стоимость доставки из Китая</h3>
                    <MiniForm/>
                </div>
            </div>
        </div>
    )
})

export default MainPage;