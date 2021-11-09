import React, { useContext } from 'react';
import closeImg from './../assets/images/red-close.svg';
import sofaImg from './../assets/images/coach.png';
import removeImg from './../assets/images/red-big-delete.svg';
import arrowDownImg from './../assets/images/blue-arrow-down.svg';
import arrowRightImg from './../assets/images/blue-arrow-right.svg';

import './../styles/selected.scss';
import './../styles/index.scss';
import { Context } from '..';
import { observer } from 'mobx-react-lite';


const Selected = observer(() => {
    const {furniture} = useContext(Context);


    //Обработчики для подсказок:
    const hideTipEdit = () => {
        const tip = document.querySelector('.selected__tip-edit');
        tip.classList.add('selected__tip-hidden');
    }
    const hideTipCalculate = () => {
        const tip = document.querySelector('.selected__tip-calculate');
        tip.classList.add('selected__tip-hidden');
    }
    const hideTipAdd = () => {
        const tip = document.querySelector('.selected__tip-add');
        tip.classList.add('selected__tip-hidden');
    }


    return (
        <div className='selected'>
            
            <header>
                <div>
                    <p className='selected__title'>
                        Добавленная мебель
                        <span className='selected__items-num'>(3)</span>
                    </p>
                </div>
                <div className='selected__tip selected__tip-edit'>
                    <img onClick={hideTipEdit} src={closeImg} alt='close'/>
                    <p>Чтобы отредактировать  введенные данные, просто нажмите на поле</p>
                </div>
            </header>


            {/* Спецификации мебели */}
            <div className='selected__specifications'>
                <div className='selected__specifications-item'><p>Кол-во</p></div>
                <div className='selected__specifications-item'><p>Общая масса нетто, кг</p></div>
                <div className='selected__specifications-item'><p>Общая масса брутто, кг</p></div>
                <div className='selected__specifications-item'><p>Общий объем, м3</p></div>
                <div className='selected__specifications-item'><p>Стоимость единицы</p></div>
                <div className='selected__specifications-item'><p>Удалить</p></div>
            </div>


            {/* Выбранные элементы мебели */}
            <div className='selected__items'>
                <div className='selected__items-item'>
                    <div className='item-img'><img src={sofaImg} alt='img'/></div>
                    <div className='item-name'><p>Диван-кровать, раскладывается</p></div>
                    <div><p>1</p></div>
                    <div><p>23</p></div>
                    <div><p>26</p></div>
                    <div><p>2</p></div>
                    <div><p>25 000 руб.</p></div>
                    <div><img src={removeImg} alt='remove'/></div>
                </div>
            </div>


            {/* Кнопки и подсказки к ним */}
            <div className='selected__footer'>
                <div className='selected__tip selected__tip-calculate'>
                    <img onClick={hideTipCalculate} src={closeImg} alt='close'/>
                    <p>Узнайте стоимость доставки, нажав на кнопку “Рассчитать”</p>
                    <img src={arrowDownImg} alt='/'/>
                </div>

                <div className='selected__footer-btns'>
                    <div className='selected__tip selected__tip-add'>
                        <img onClick={hideTipAdd} src={closeImg} alt='close'/>
                        <p>Через кнопку “Добавить” Вы можете добавлять еще элементы</p>
                        <img src={arrowRightImg} alt='/'/>
                    </div>

                    <button type='submit' className='btn btn__blue btn__submit'>Добавить</button>
                    <button type='submit' className='btn btn__blue btn__submit'>Рассчитать</button>
                </div>
            </div>

        </div>
    )
})

export default Selected;