import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../pages/_app';
import autocomplete from '../../../utils/autocomplete';

import { Item, 
    ItemInput, 
    Dropdown,
    DropdownItem
} from './styles';


const ChineseCityInput = observer(() => {
    const {chineseCities} = useContext(Context);

    const [currentChineseCity, setChineseCity] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const [list, setList] = useState(null);


    //Показываем результаты:
    function showChineseResults(value) {
        setChineseCity(value);
        let shownItems = autocomplete(value, chineseCities.chineseCities);  //эл-нты, кот. выводим в дропдауне
        setDropDown(true);
        setList(shownItems);
    }

    //Выбор опции:
    function onItem(item) {
        setChineseCity(item.name);
        setDropDown(false);
        chineseCities.setIsSelected(true);  //помечаем в стор,что айтем выбран
    }


    return (
        <Item>
            <ItemInput 
                value={currentChineseCity} 
                onChange={e => showChineseResults(e.target.value)}
                type='text'
            ></ItemInput>

            {dropDown &&
                <Dropdown>
                    {list.map(item => 
                        <DropdownItem key={item.id} onClick={() => onItem(item)}>
                            {item.name}
                        </DropdownItem>
                    )}
                </Dropdown>
            }
        </Item>
    );
});

export default ChineseCityInput;