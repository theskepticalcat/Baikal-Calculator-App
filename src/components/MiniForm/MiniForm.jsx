import React, { useContext } from 'react';
import { Context } from '../..';
import './miniForm.scss';
import whiteArrow from '../../assets/images/white-arrow-right.svg';


const MiniForm = () => {
    const{russianCities} = useContext(Context);
    console.log(russianCities);

    return (
        <div className='wrapper'>
            <div className='form-container'>

                <form className='form'>
                    <div className='form__item'>
                        <input className='form__from' type='text'></input>
                    </div>

                        <div className='form__item'>
                            <select className='form__to' name=''>
                                {/* {russianCities.map(({id, name}) => {
                                    return (
                                    <option className='form__option' key={id}>{name}</option>
                                    )
                                })} */}
                            </select>
                        </div>

                        <div className='form__item'>
                            <select className='form__usd' name=''>
                                <option>USD</option>
                            </select>
                        </div>

                    <div className='form__rate'></div>
                </form>
                
            </div>

            <button className='nextBtn'>Далее <img src={whiteArrow} alt='/'/></button>
        </div>
    )
}

export default MiniForm;
