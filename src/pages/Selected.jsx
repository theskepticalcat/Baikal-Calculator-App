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
            <table className='selected__specifications'>
                <tr>    {/* Спецификации мебели */}
                    <th className='empty-sell hidden'></th>
                    <th className='empty-sell hidden'></th>
                    <th className='description-1'><p>Кол-во</p></th>
                    <th className='description-2'><p>Общая масса нетто, кг</p></th>
                    <th className='description-3'><p>Общая масса брутто, кг</p></th>
                    <th className='description-4'><p>Общий объем, м3</p></th>
                    <th className='description-5'><p>Стоимость единицы</p></th>
                    <th className='description-6'><p>Удалить</p></th>
                </tr>
            </table>

            {/* Выбранные элементы мебели */}
            <div className='selected-items'>
                <table>
                    <tr>
                        <td className='description-img'><img src={sofaImg} alt='img'/></td>
                        <td><p>Диван-кровать, раскладывается</p></td>
                        <td className='description-1'><p>1</p></td>
                        <td className='description-2'><p>23</p></td>
                        <td className='description-3'><p>26</p></td>
                        <td className='description-4'><p>2</p></td>
                        <td className='description-5'><p>25 000 руб.</p></td>
                        <td className='description-6'><img src={removeImg} alt='remove'/></td>
                    </tr>
                </table>
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