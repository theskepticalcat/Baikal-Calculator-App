import React, { useContext, useState } from 'react';
import { Context } from './../_app';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

import Calculate from '../../components/Calculate';
import Specifications from './Specifications';
import Title from './Title';

import sofaImg from './../../assets/images/sofa.png';
import removeImg from './../../assets/images/red-big-delete.svg';
import arrowDownImg from './../../assets/images/blue-arrow-down.svg';
import arrowRightImg from './../../assets/images/blue-arrow-right.svg';

import {SelectedBlock, 
    SelectedTip,
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


    //Подсказки:
    const hideTipCalculate = () => {
        const tip = document.querySelector('.selected__tip-calculate');
        tip.classList.add('selected__tip-hidden');
    }
    const hideTipAdd = () => {
        const tip = document.querySelector('.selected__tip-add');
        tip.classList.add('selected__tip-hidden');
    }


    //Удаление элемента:
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

        window.scrollTo(0, document.body.scrollHeight);
    }


    return (
        <SelectedBlock>
            <Title />
            <Specifications />

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