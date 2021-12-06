import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../pages/_app';

import { Item } from './styles.js';

const Rate = observer(() => {
    const{currency} = useContext(Context);

    return (
        <Item>
            <p>{currency.selectedCurrency.rate}</p>
        </Item>
    );
});

export default Rate;