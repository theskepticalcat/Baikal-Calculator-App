import React from 'react';
import { observer } from 'mobx-react-lite';
import MiniForm from '../components/MiniForm';

import { Main, 
    MiniformWrap, 
    MiniformTitle, 
    MiniformInscriptions 
} from './styles';


const Index = observer(() => {
    return (
        <Main>
            <MiniformWrap>
                <MiniformTitle>Рассчитайте<br></br>стоимость доставки из Китая</MiniformTitle>
                <MiniformInscriptions>
                    <p>Откуда</p>
                    <p>Куда</p>
                    <p>Валюта</p>
                    <p>Курс</p>
                </MiniformInscriptions>
                <MiniForm/>
            </MiniformWrap>
        </Main>
    )
})

export default Index;