import React, { useContext, useState } from 'react';
import { Context } from './../_app';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

import Calculate from '../../components/Calculate';

import closeImg from './../../assets/images/red-close.svg';
import sofaImg from './../../assets/images/sofa.png';
import removeImg from './../../assets/images/red-big-delete.svg';
import arrowDownImg from './../../assets/images/blue-arrow-down.svg';
import arrowRightImg from './../../assets/images/blue-arrow-right.svg';

import {SelectedBlock, 
    SelectedHeader,
    SelectedTitle, 
    SelectedTip,
    SelectedSpecifications,
    SelectedItems, 
    SelectedFooter, 
    SelectedFooterBtns,
    RemoveBtn,
    AddBtn,
    CalcBtn
} from './styles';


const Selected = observer(() => {
    const {furniture} = useContext(Context);
    
    const router = useRouter();
    const[total, setTotal] = useState('');

    //const selectItem = JSON.parse(localStorage.getItem('selectItem'));


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


    //Итоговый рассчёт:
    const calculation = () => {
        document.body.classList.add('overflow');
        document.getElementById('calculate').classList.remove('hidden');
        document.getElementById('header').classList.add('blueBackground');

        const calculatedTotal = furniture.selectedFurniture.reduce((sum, item) => sum + item.price*item.total, 0);
        setTotal(calculatedTotal);

        window.scrollTo(0,document.body.scrollHeight);
    }


    return (
        <SelectedBlock>
            <SelectedHeader>
                <SelectedTitle>
                    Добавленная мебель
                    <span className='selected__items-num'>{` (${furniture.selectedFurniture.length})`}</span>
                </SelectedTitle>
                <SelectedTip>
                    <Image onClick={hideTipEdit} src={closeImg} alt='close'/>
                    <p>Чтобы отредактировать  введенные данные, просто нажмите на поле</p>
                </SelectedTip>
            </SelectedHeader>


            {/* Спецификации мебели */}
            <SelectedSpecifications>
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
            </SelectedSpecifications>


            {/* Выбранные элементы мебели */}
            <SelectedItems>
                {furniture.selectedFurniture.map(item => 
                    <table key={item.id}>
                        <tr>
                            <td className='description-img'><Image src={sofaImg} alt='img'/></td>
                            <td className='description-name'><p>{item.name}</p></td>
                            <td className='description-1 description'><p>{item.total}</p></td>
                            <td className='description-2 description'><p>23</p></td>
                            <td className='description-3 description'><p>26</p></td>
                            <td className='description-4 description'><p>2</p></td>
                            {/* <td className='description-5 description'><p>{`${Math.ceil(item.price/selectItem.rate)} ${selectItem.currency}`}</p></td> */}
                            <td className='description-6 description'>
                                <RemoveBtn onClick={() => removeItem(item)} type='button'><Image src={removeImg} alt='remove'/></RemoveBtn>
                            </td>
                        </tr>
                    </table>
                )}
            </SelectedItems>



            {/* Кнопки и подсказки к ним */}
            <SelectedFooter>
                <SelectedTip>
                    <Image onClick={hideTipCalculate} src={closeImg} alt='close'/>
                    <p>Узнайте стоимость доставки, нажав на кнопку “Рассчитать”</p>
                    <Image src={arrowDownImg} alt='/'/>
                </SelectedTip>

                <SelectedFooterBtns>
                    <SelectedTip>
                        <Image onClick={hideTipAdd} src={closeImg} alt='close'/>
                        <p>Через кнопку “Добавить” Вы можете добавлять еще элементы</p>
                        <Image src={arrowRightImg} alt='/'/>
                    </SelectedTip>

                    <AddBtn onClick={() => router.push('/select')} type='submit'>Добавить</AddBtn>
                    <CalcBtn onClick={calculation} type='submit'>Рассчитать</CalcBtn>
                </SelectedFooterBtns>
            </SelectedFooter>


            <Calculate total={total}/>
        </SelectedBlock>
    )
})

export default Selected;