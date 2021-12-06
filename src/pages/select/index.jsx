import React, { useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

import SelectionInfo from '../../components/SelectionInfo/SelectionInfo';
import autocomplete from '../../utils/autocomplete';

import sofa from './../assets/images/sofa.png';
import './styles.scss';



const SelectionPage = observer(() => {
    const {furniture} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState('');  //объект выбранного айтема
    const [onInputValue, setOnInputValue] = useState('');  //стейт инпута
    const[furnitureOnView, setFurnitureOnView] = useState(furniture.furniture); //стейт выдачи айтемов по поиску


    const select = (item) => {
        setSelectedItem(item);      //добавляем выбранный айтем в стейт для отображения
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
        <div>
        <div className='selection__header'>
            <p>Выберите мебель, которую нужно<br></br>перевезти:</p>
            <p>Затем заполните следующие<br></br>поля выбранного элемента:</p>
        </div>
        
        <div className='selection'>
            <div className='selection__wrap'>
                <form className='selection__search'>
                    <input onChange={e => itemsSearch(e.currentTarget.value)} value={onInputValue} className='selection__search--input' placeholder='Введите название' type='text'></input>
                    <button className='btn btn__search btn__blue' type='submit'>Поиск</button>
                </form>

                {/* Вывод всей мебели */}
                <div className='selection__items'>
                    {furnitureOnView.map(item => {
                        return (
                        <div key={item.id} className='selection__items--item'>
                            <img src={sofa} alt="диван" />
                            <p className='selection__items--name'>{item.name}</p>
                            <button onClick={() => select(item)} type='button' className='btn btn__blue btn__medium btn__white-active'>Выбрать</button>
                        </div>
                        )
                    })}
                </div>
            </div>

            {/* Информация о выбранном элементе мебели */}
            <SelectionInfo selectedItem={selectedItem}/>
        </div>
        </div>
    )
})

export default SelectionPage;