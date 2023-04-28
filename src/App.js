import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import audioMappings from './audio-mappings';
import DrumPad from './DrumPad';
import { playAudio } from './store/audioSlice';

function App() {
  const dispatch = useDispatch();
  const supportedKeys = audioMappings.map(mapping => mapping.key);
  let audioSrc = ''; // TODO
  const playSound = (event) => {
    const key = event.key.toUpperCase();
    supportedKeys.includes(key) && dispatch(playAudio(key));
  }

  const drumPadItems = audioMappings.map((mapping, index) => {
    return <DrumPad className="col-md-4" key={`key_${mapping.key}`} id={mapping.key} src={mapping.audio} />
  })

  document.addEventListener('keydown', playSound);

  return (
  <div className="container px-4">
    <div className='position-relative'>
      <div id="drum-machine" className='row'>
        {drumPadItems}
        <div id="display">
          {audioSrc}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
