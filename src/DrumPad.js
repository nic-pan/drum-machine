import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function DrumPad(props) {
    const audio = React.createRef();
    const audioSelector = useSelector((state)=>{
        return `${state.audio.key}-${Math.random()}`
    })

    useEffect(()=>{
        if (audioSelector.split('-')[0] === props.id){
            playAudio();
        }
    },[audioSelector])

    const playAudio = (event) => {
        audio.current.play();
    }

    return (
        <div className={props.className + " DrumPad"}>
            <audio ref={audio} id={props.id} className="clip" src={props.src}></audio>
            <button className="btn btn-outline-dark" onClick={playAudio}>{props.id}</button>
        </div>
     );
}

export default DrumPad;