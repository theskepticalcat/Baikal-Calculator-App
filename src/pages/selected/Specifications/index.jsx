import React from 'react';
import { Specs } from './styles';


const Specifications = () => {
    return (
        <Specs>
            <tr>
                <th className='hidden'></th>
                <th className='hidden'></th>
                <th className='description-1 description'><p>Кол-во</p></th>
                <th className='description-2 description'><p>Общая масса нетто, кг</p></th>
                <th className='description-3 description'><p>Общая масса брутто, кг</p></th>
                <th className='description-4 description'><p>Общий объем, м3</p></th>
                <th className='description-5 description'><p>Стоимость единицы</p></th>
                <th className='description-6 description'><p>Удалить</p></th>
            </tr>
        </Specs>
    );
};

export default Specifications;