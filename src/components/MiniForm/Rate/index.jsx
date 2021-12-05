import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

import './styles.scss';

const Rate = observer(() => {
    const{currency} = useContext(Context);

    return (
        <div className='item'>
            <p>{currency.selectedCurrency.rate}</p>
        </div>
    );
});

export default Rate;