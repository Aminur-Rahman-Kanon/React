import { useState } from 'react';
import Child from './Component/Child/child';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1)
  }

  const decrementCounter = () => {
    setCount(count - 1)
  }
  
  return (
    <div className="App">
      <h3>{count}</h3>
      <Child increment={incrementCounter} decrement={decrementCounter}/>
    </div>
  );
}

export default App;
