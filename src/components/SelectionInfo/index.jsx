import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../pages/_app';
import Link from 'next/link';
import Image from 'next/image';

import selectedItemImg from './../../assets/images/sofa.png';
import add from './../../assets/images/blue-add.svg';
import reduce from './../../assets/images/blue-reduce.svg';

import {InfoWrap, 
    InfoEmpty, 
    Info, 
    InfoSelectedItem, 
    InfoQuantity, 
    InfoQuantityTitle, 
    QuantityButtons, 
    QuantityBtn, 
    QuantityAmount, 
    InfoSpecifications, 
    SpecificationsItem, 
    ResetBtn,
    Add
} from './styles';


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


    //---Добавление выбранной мебели в глоб.хранилище:
    const addSelectedItem = () => {
        furniture.setSelectedFurniture(selectedItem);
    }


    return (
        <InfoWrap>
        {!selectedItem
            ? 
            <InfoEmpty>
                {furniture.selectedFurniture.length > 0 ? <p>Выберете еще элемент</p> : <p>Вы не выбрали пока ни одного элемента.</p>}
            </InfoEmpty>
            :
            <Info>
                <InfoSelectedItem>
                    <Image src={selectedItemImg} alt='/' />
                    <p>{selectedItem.name}</p>
                </InfoSelectedItem>

                <InfoQuantity>
                    <InfoQuantityTitle>Кол-во:</InfoQuantityTitle>
                    <QuantityButtons>
                        <QuantityBtn onClick={decrement} type='button'><img src={reduce} alt='-' /></QuantityBtn>
                        <QuantityAmount>{total}</QuantityAmount>
                        <QuantityBtn onClick={increment} type='button'><img src={add} alt='+' /></QuantityBtn>
                    </QuantityButtons>
                </InfoQuantity>

                <InfoSpecifications>
                    <SpecificationsItem placeholder={`Общий объем: ${selectedItem.m3} м3`} disabled></SpecificationsItem>
                    <SpecificationsItem placeholder={`Общая масса нетто: ${selectedItem.netweight} кг`} disabled></SpecificationsItem>
                    <SpecificationsItem placeholder={`Общая масса брутто: ${selectedItem.grossweight} кг`} disabled></SpecificationsItem>
                    <SpecificationsItem placeholder={`Стоимость одной единицы: ${Math.ceil(selectedItem.price / selectItem.rate)}`} disabled></SpecificationsItem>
                </InfoSpecifications>

                <form>
                    <ResetBtn>Сбросить</ResetBtn>
                    <Link href="/selected">
                        <Add onClick={addSelectedItem}>Добавить</Add>
                    </Link>
                </form>
            </Info>
        }
        </InfoWrap>
    )
})

export default SelectionInfo;