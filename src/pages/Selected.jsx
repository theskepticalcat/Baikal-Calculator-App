import React, { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import closeImg from './../assets/images/red-close.svg';
import sofaImg from './../assets/images/coach.png';
import removeImg from './../assets/images/red-big-delete.svg';
import arrowDownImg from './../assets/images/blue-arrow-down.svg';
import arrowRightImg from './../assets/images/blue-arrow-right.svg';

import './../styles/selected.scss';
import './../styles/index.scss';


const Selected = observer(() => {
    const {furniture} = useContext(Context);
    const history = useHistory();


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


    //Удаление элемента из списка по нажатию на крестик:
    const removeItem = (item) => {
        const newSelectedFurniture = furniture.selectedFurniture.filter(i => i.id !== item.id);
        furniture.resetSelected(newSelectedFurniture);
    }


    return (
        <div className='page-wrapper'>
        <div className='selected'>
            <header>
                <div>
                    <p className='selected__title'>
                        Добавленная мебель
                        <span className='selected__items-num'>({furniture.selectedFurniture.length})</span>
                    </p>
                </div>
                <div className='selected__tip selected__tip-edit'>
                    <img onClick={hideTipEdit} src={closeImg} alt='close'/>
                    <p>Чтобы отредактировать  введенные данные, просто нажмите на поле</p>
                </div>
            </header>


            {/* Спецификации мебели */}
            <table className='selected__specifications'>
                <tr>
                    <th className='hidden'></th>
                    <th className='hidden'></th>
                    <th className='description-1 description'><p>Кол-во</p></th>
                    <th className='description-2 description'><p>Общая масса нетто, кг</p></th>
                    <th className='description-3 description'><p>Общая масса брутто, кг</p></th>
                    <th className='description-4 description'><p>Общий объем, м3</p></th>
                    <th className='description-5 description'><p>Стоимость единицы</p></th>
                    <th className='description-6 description'><p>Удалить</p></th>
                </tr>
            </table>


            {/* Выбранные элементы мебели */}
            <div className='selected-items'>
                {furniture.selectedFurniture.map(item => 
                    <table>
                        <tr>
                            <td className='description-img'><img src={sofaImg} alt='img'/></td>
                            <td className='description-name'><p>{item.name}</p></td>
                            <td className='description-1 description'><p>{item.total}</p></td>
                            <td className='description-2 description'><p>23</p></td>
                            <td className='description-3 description'><p>26</p></td>
                            <td className='description-4 description'><p>2</p></td>
                            <td className='description-5 description'><p>{item.price} руб.</p></td>
                            <td className='description-6 description'>
                                <button onClick={() => removeItem(item)} className='selected-items--remove' type='button'><img src={removeImg} alt='remove'/></button>
                            </td>
                        </tr>
                    </table>
                )}
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

                    <button onClick={() => history.push('/select')} type='submit' className='btn btn__blue btn__submit'>Добавить</button>
                    <button type='submit' className='btn btn__blue btn__submit'>Рассчитать</button>
                </div>
            </div>

        </div>
        </div>
    )
})

export default Selected;