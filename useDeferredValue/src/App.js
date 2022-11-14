import { useDeferredValue, useMemo, useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');

  const deferredValue = useDeferredValue(value);

  const inputHandler = (event) => {
    setValue(event.target.value)
  }

  const displayResult = useMemo(() => {
    const result = [];

    for (let x=0; x<10000; x++){
      result.push(<p key={x}>{deferredValue}</p>)
    }

    return result;
  },  [deferredValue])

  return (
    <div className="App">
      <input onChange={inputHandler}/>
      {displayResult}
    </div>
  );
}

export default App;
