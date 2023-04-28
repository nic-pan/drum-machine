import React, { useEffect } from "react";

function DrumButton(props) {
    return <button id={props.id} className="drum-btn" onClick={props.onClick}>
        <div className="drum-btn__content">
            <p className="drum-btn__text">{props.id}</p>
        </div>
    </button>
}

export default DrumButton;