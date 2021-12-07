import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../pages/_app';
import Link from 'next/link';

import {
    BtnsWrapper,
    ResetBtn,
    Add
} from './styles';


const Btns = observer(({selectedItem}) => {
    const {furniture} = useContext(Context);

    const addSelectedItem = () => {     //в стор
        furniture.setSelectedFurniture(selectedItem);
    }

    return (
        <BtnsWrapper>
            <ResetBtn>Сбросить</ResetBtn>
            <Link href="/selected">
                <Add onClick={addSelectedItem}>Добавить</Add>
            </Link>
        </BtnsWrapper>
    );
});

export default Btns;