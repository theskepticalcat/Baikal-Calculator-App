import React, { useContext } from 'react';
import { Context } from '../../_app';
import Image from 'next/image';

import closeImg from '../../../assets/images/red-close.svg';

import { TitleWrapper, 
    Content, 
    Tip
} from './styles';


const Title = () => {
    const {furniture} = useContext(Context);

    //Подсказка:
    const hideTipEdit = () => {
        const tip = document.querySelector('.selected__tip-edit');
        tip.classList.add('selected__tip-hidden');
    }

    return (
        <TitleWrapper>
                <Content>
                    Добавленная мебель
                    <span>{` (${furniture.selectedFurniture.length})`}</span>
                </Content>
                <Tip>
                    <Image onClick={hideTipEdit} src={closeImg} alt='close'/>
                    <p>Чтобы отредактировать  введенные данные, просто нажмите на поле</p>
                </Tip>
        </TitleWrapper>
    );
};

export default Title;