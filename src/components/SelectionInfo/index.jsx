import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../pages/_app';
import Link from 'next/link';
import Image from 'next/image';

import QuantityBlock from './QuantityBlock';
import Specifications from './Specifications';
import Btns from './Btns';

import selectedItemImg from './../../assets/images/sofa.png';


import {InfoWrap, 
    InfoEmpty, 
    Info, 
    InfoSelectedItem
} from './styles';


const SelectionInfo = observer(({selectedItem}) => {    //передали пропсом выбранный айтем из SelectionPage.jsx
    const {furniture} = useContext(Context);

    return (
        <InfoWrap>
            {!selectedItem
                ? 
                <InfoEmpty>
                    {furniture.selectedFurniture.length > 0 ? <p>Выберете еще элемент</p> : <p>Вы не выбрали пока ни одного элемента.</p>}
                </InfoEmpty>
                :
                <Info>
                    <InfoSelectedItem><Image src={selectedItemImg} alt='/' /><p>{selectedItem.name}</p></InfoSelectedItem>
                    <QuantityBlock />
                    <Specifications selectedItem={selectedItem} />
                    <Btns selectedItem={selectedItem} />
                </Info>
            }
        </InfoWrap>
    )
})

export default SelectionInfo;