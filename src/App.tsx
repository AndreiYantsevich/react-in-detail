import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';


const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const onClickCallback = (id: number) => {
        alert(`Click ${id}!`)
    }

    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[{title: 'Andrei', value: 1}, {title: 'Vika', value: 2}, {title: 'Arseny', value: 3}]}
                       onClick={onClickCallback}
            />
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    )
}

export default App;
