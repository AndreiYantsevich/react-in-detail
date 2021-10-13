import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import Select from './components/Select/Select';


const App = React.memo(() => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')

    const onClickCallback = (id: number) => {
        alert(`Click ${id}!`)
    }

    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Users'}/>
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
            <Select value={value} onChange={setValue}
                    items={[{value: '1', title: 'Minsk'}, {value: '2', title: 'Moscow'}, {value: '3', title: 'Kiev'}]}/>
        </div>
    )
})

export default App;
