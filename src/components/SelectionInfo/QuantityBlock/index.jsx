import React, { useState } from 'react';
import Image from 'next/image';

import add from '../../../assets/images/blue-add.svg';
import reduce from '../../../assets/images/blue-reduce.svg';

import {
    InfoQuantity, 
    InfoQuantityTitle,
    QuantityButtons,
    QuantityBtn,
    QuantityAmount
} from './styles';


const QuantityBlock = () => {
    const [total, setTotal] = useState(1);
    
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

    return (
        <InfoQuantity>
            <InfoQuantityTitle>Кол-во:</InfoQuantityTitle>
            <QuantityButtons>
                <QuantityBtn onClick={decrement} type='button'><Image src={reduce} alt='-' /></QuantityBtn>
                <QuantityAmount>{total}</QuantityAmount>
                <QuantityBtn onClick={increment} type='button'><Image src={add} alt='+' /></QuantityBtn>
            </QuantityButtons>
        </InfoQuantity>
    );
};

export default QuantityBlock;