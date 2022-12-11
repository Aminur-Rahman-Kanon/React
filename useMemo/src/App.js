import { useState, useMemo } from "react";
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const [word, setWord] = useState('');

  const expensiveFunction = (word) => {
    console.log('expensive function executing...');
    for (let i=0; i<200000000; i++){
    };
    return word;
  }

  const words = useMemo(() => {
    return expensiveFunction(word)
  }, [word])

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
      {words}
      <input onChange={(event) => setWord(event.target.value)}/>
    </div>
  );
};

export default App;
