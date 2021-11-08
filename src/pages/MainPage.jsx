import React, {useState} from 'react';
import '../styles/mainPage.scss';
import Prompt from '../components/Prompt/Prompt';
import MiniForm from '../components/MiniForm/MiniForm';
import Header from '../components/Header/Header';


const MainPage = () => {
    const [promptActive, setPromptActive] = useState(false);

    document.addEventListener('readystatechange', () => {
        if(document.readyState === 'complete') {
            setInterval(() => {
            setPromptActive(true);
            }, 2000)
        }
    })


    return (
        <div className='container'>
            <Header />
            <div className='main'>
                <h3>Рассчитайте<br></br>стоимость доставки из Китая</h3>
                <MiniForm/>
                <Prompt active={promptActive} setActive={setPromptActive}/>
            </div>
        </div>
    )
}

export default MainPage;