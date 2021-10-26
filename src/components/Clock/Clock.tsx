import React, {useEffect, useState} from 'react';

const Clock = () => {

    const [state, setState] = useState(new Date())

    const currentTime = () => {
        setState(new Date())
    }

    useEffect(() => {
        setInterval(() => {
            currentTime()
        }, 1000)
    })

    return (
        <div>
            <h1>{state.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;