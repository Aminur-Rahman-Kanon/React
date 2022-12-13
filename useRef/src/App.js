import { useState, useRef } from "react";
import './App.css';

const App = () => {

  const inputRef = useRef(null);

  const [value, setvalue] = useState('');

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <input ref={inputRef} onChange={(event) => setvalue(event.target.value)} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
