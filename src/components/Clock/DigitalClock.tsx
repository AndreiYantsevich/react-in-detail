import React, {useEffect, useState} from 'react';

type PropsType = {}

const DigitalClock: React.FC<PropsType> = React.memo((props) => {

    const [state, setState] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setState(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <h1>{state.toLocaleTimeString()}</h1>
        </div>
    );
});

export default DigitalClock;