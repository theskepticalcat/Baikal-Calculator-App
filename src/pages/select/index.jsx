import React, { useContext, useState } from 'react';
import { Context } from '../_app';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import SelectionInfo from '../../components/SelectionInfo';
import autocomplete from '../../utils/autocomplete';

import sofa from '../../assets/images/sofa.png';

import { SelectionHeader, 
    SelectionHeaderTitle, 
    Selection, 
    SelectionWrap, 
    SelectionSearch, 
    SearchBtn,
    SelectionInput, 
    SelectionItems, 
    SelectionItem, 
    SelectionItemName, 
    SelectBtn
} from './styles';


const SelectionPage = observer(() => {
    const {furniture} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState('');  //объект выбранного айтема
    const [onInputValue, setOnInputValue] = useState('');  //стейт инпута
    const [furnitureOnView, setFurnitureOnView] = useState(furniture.furniture); //стейт выдачи айтемов по поиску


    const select = (item) => {
        setSelectedItem(item);
        setFurnitureOnView(furniture.furniture);
        setOnInputValue('');
        furniture.setSelectedItem(item);    //в глобальное хранилище
    }


    //---Выдача по поиску---:
    function itemsSearch(value) {
        setOnInputValue(value);     //в стейт инпута
        const newArr = autocomplete(value, furnitureOnView);
        setFurnitureOnView(newArr);     //обновляем данные в стейт выдачи айтемов

        if(value === '') {
            setFurnitureOnView(furniture.furniture);
        }
        console.log(onInputValue);
    }

    
    return (
        <>
            <SelectionHeader>
                <SelectionHeaderTitle>Выберите мебель, которую нужно<br></br>перевезти:</SelectionHeaderTitle>
                <SelectionHeaderTitle>Затем заполните следующие<br></br>поля выбранного элемента:</SelectionHeaderTitle>
            </SelectionHeader>
            
            <Selection>
                <SelectionWrap>
                    <SelectionSearch>
                        <SelectionInput 
                            onChange={e => itemsSearch(e.currentTarget.value)} 
                            value={onInputValue} 
                            placeholder='Введите название' 
                            type='text'>
                        </SelectionInput>
                    </SelectionSearch>

                    {/* Вывод всей мебели */}
                    <SelectionItems>
                        {furnitureOnView.map(item => {
                            return (
                            <SelectionItem key={item.id}>
                                <Image src={sofa} alt="диван" />
                                <SelectionItemName>{item.name}</SelectionItemName>
                                <SelectBtn onClick={() => select(item)} type='button'>Выбрать</SelectBtn>
                            </SelectionItem>
                            )
                        })}
                    </SelectionItems>
                </SelectionWrap>

                {/* Информация о выбранном элементе мебели */}
                <SelectionInfo selectedItem={selectedItem}/>
            </Selection>
        </>
    )
})

export default SelectionPage;