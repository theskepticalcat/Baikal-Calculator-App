import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../../pages/_app';

import {
    InfoSpecifications,
    SpecificationsItem
} from './styles';

const Specifications = observer(({selectedItem}) => {
    const {currency} = useContext(Context);

    return (
        <InfoSpecifications>
            <SpecificationsItem 
                placeholder={`Общий объем: ${selectedItem.m3} м3`} 
                disabled
            ></SpecificationsItem>
            <SpecificationsItem 
                placeholder={`Общая масса нетто: ${selectedItem.netweight} кг`} 
                disabled
            ></SpecificationsItem>
            <SpecificationsItem 
                placeholder={`Общая масса брутто: ${selectedItem.grossweight} кг`} 
                disabled
            ></SpecificationsItem>
            <SpecificationsItem 
                placeholder={`Стоимость одной единицы: ${Math.ceil(selectedItem.price / currency.selectedCurrency.rate)} ${currency.selectedCurrency.name}`} 
                disabled
            ></SpecificationsItem>
        </InfoSpecifications>
    );
});

export default Specifications;