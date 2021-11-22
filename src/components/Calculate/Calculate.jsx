import React from 'react';
import './calculate.scss';

const Calculate = ({total}) => {
    const selectItem = JSON.parse(localStorage.getItem('selectItem'));
    
    return (
        <div className='calculate hidden' id='calculate'>
            <div className='calculate__details'>
                <p>Стоимость доставки:</p>
                <p>{`${Math.ceil(5000 / selectItem.rate)} ${selectItem.currency}`}</p>
                <p>Таможенные платежи:</p>
                <p>{`${Math.ceil(500 / selectItem.rate)} ${selectItem.currency}`}</p>
            </div>
            <div className='calculate__total'>
                {total
                ?
                <p>Итого: {`${Math.ceil(total / selectItem.rate + Math.ceil(5000 / selectItem.rate) + Math.ceil(500 / selectItem.rate))} ${selectItem.currency}`}</p>
                :
                <p>Итого: {`${total} ${selectItem.currency}`}</p>
                }
            </div>
            <div>
                <button className='btn btn__calculate'>Сохранить рассчёт</button>
                <button className='btn btn__blue btn__whide'>Связаться по доставке</button>
            </div>
        </div>
    )
}

export default Calculate;
