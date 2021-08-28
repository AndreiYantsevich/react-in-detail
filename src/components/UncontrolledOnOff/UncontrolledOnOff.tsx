import {useState} from "react";


type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {


    let [on, setOn] = useState(false)  //hook

    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}