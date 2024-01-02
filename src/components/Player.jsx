import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  //const [ enteredPlayerName, setEnteredPlayerName ] = useState('');
  // const [ submitted, setSubmitted ] = useState(false);

  function handleClick() {
    // setSubmitted(true);
    //setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName.current ? playerName.current.value : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
