import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import './selectionInfo.scss';
import './../../styles/index.scss';

import selectedItemImg from './../../assets/images/coach.png';
import add from './../../assets/images/blue-add.svg';
import reduce from './../../assets/images/blue-reduce.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const SelectionInfo = observer(({selectedItem}) => {
    const {furniture} = useContext(Context);
    const [isSelected, setSelected] = useState(selectedItem);   //стэйт отображения выбранного айтема мебели


    return (
        <div>
        {isSelected === selectedItem
            ? 
            <div className='info__empty'>
                <p>Вы не выбрали пока ни одного элемента.</p>
            </div>
            :
            <div className='info'>
                <div className='info__selected-item'>
                    <img src={selectedItemImg} alt='/' />
                    <p>{selectedItem.name}</p>
                </div>


                <div className='info__quantity'>
                    <p>Кол-во:</p>
                    <div className='info__quantity-btns'>
                        <button type='button'><img src={reduce} alt='-' /></button>
                        <p className='info__quantity-amount'>1</p>
                        <button type='button'><img src={add} alt='+' /></button>
                    </div>
                </div>

                <div className='info__specifications'>
                    <div className='info__specifications-item'><p>25 м3</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Общая масса нетто, кг</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Общая масса брутто, кг</p></div>
                    <div className='info__specifications-item'><p className='info__placeholder'>Стоимость одной единицы</p></div>
                </div>

                <form>
                    <button className='btn btn__blue btn__submit'>Сбросить</button>
                    <Link to="/selected">
                        <button onClick={e => e.preventDefault} className='btn btn__blue btn__submit'>Добавить</button>
                    </Link>
                </form>
            </div>
        }
        </div>
    )
})

export default SelectionInfo;