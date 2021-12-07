import React from 'react';

import {CalculateBlock, 
    CalculateDetails, 
    CalculateTotal, 
    BtnCalculate, 
    BtnContact
} from './styles';


const Calculate = ({total}) => {
    //const selectItem = JSON.parse(localStorage.getItem('selectItem'));
    
    return (
        <CalculateBlock hidden={true}>
            <CalculateDetails>
                <p>Стоимость доставки:</p>
                {/* <p>{`${Math.ceil(5000 / selectItem.rate)} ${selectItem.currency}`}</p> */}
                <p>Таможенные платежи:</p>
                {/* <p>{`${Math.ceil(500 / selectItem.rate)} ${selectItem.currency}`}</p> */}
            </CalculateDetails>
            <CalculateTotal>
                {/* {total
                ?
                <p>Итого: {`${Math.ceil(total / selectItem.rate + Math.ceil(5000 / selectItem.rate) + Math.ceil(500 / selectItem.rate))} ${selectItem.currency}`}</p>
                :
                <p>Итого: {`${total} ${selectItem.currency}`}</p>
                } */}
            </CalculateTotal>
            <div>
                <BtnCalculate>Сохранить рассчёт</BtnCalculate>
                <BtnContact>Связаться по доставке</BtnContact>
            </div>
        </CalculateBlock>
    )
}

export default Calculate;
