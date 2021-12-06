import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Link from 'next/link';

import selectedItemImg from './../../assets/images/sofa.png';
import add from './../../assets/images/blue-add.svg';
import reduce from './../../assets/images/blue-reduce.svg';

import './selectionInfo.scss';



const SelectionInfo = observer(({selectedItem}) => {    //передали пропсом выбранный айтем из SelectionPage.jsx
    const {furniture} = useContext(Context);
    const [total, setTotal] = useState(1);
    const selectedItem = furniture.selectedItem;


    //Увеличение и уменьшение количества штук:
    const increment = () => {
        setTotal(total + 1);
    }
    const decrement = () => {
        if (total === 1) {
            return;
        }
        setTotal(total - 1);
    }


    //---Добавление выбранной мебели в глобальное хранилище:
    const addSelectedItem = () => {
        furniture.setSelectedFurniture(selectedItem);
    }


    return (
        <div className='wrap'>
        {!selectedItem
            ? 
            <div className='info__empty'>
                {furniture.selectedFurniture.length > 0 ? <p>Выберете еще элемент</p> : <p>Вы не выбрали пока ни одного элемента.</p>}
            </div>
            :
            <div className='info' id='info'>
                <div className='info__selected-item'>
                    <img src={selectedItemImg} alt='/' />
                    <p>{selectedItem.name}</p>
                </div>


                <div className='info__quantity'>
                    <p className='info__quantity--quantity'>Кол-во:</p>
                    <div className='info__quantity--btns'>
                        <button onClick={decrement} type='button'><img src={reduce} alt='-' /></button>
                        <p className='info__quantity--amount'>{total}</p>
                        <button onClick={increment} type='button'><img src={add} alt='+' /></button>
                    </div>
                </div>

                <div className='info__specifications'>
                    <input className='info__specifications-item' placeholder={`Общий объем: ${selectedItem.m3} м3`} disabled></input>
                    <input className='info__specifications-item' placeholder={`Общая масса нетто: ${selectedItem.netweight} кг`} disabled></input>
                    <input className='info__specifications-item' placeholder={`Общая масса брутто: ${selectedItem.grossweight} кг`} disabled></input>
                    <input className='info__specifications-item' placeholder={`Стоимость одной единицы: ${Math.ceil(selectedItem.price / selectItem.rate)}`} disabled></input>
                </div>

                <form>
                    <button className='btn btn__blue btn__submit'>Сбросить</button>
                    <Link href="/selected">
                        <button onClick={addSelectedItem} className='btn btn__blue btn__submit'>Добавить</button>
                    </Link>
                </form>
            </div>
        }
        </div>
    )
})

export default SelectionInfo;