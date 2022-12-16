import { useEffect, useRef, useState } from "react";
import './App.css';
import Child from "./child/child";

const App = () => {

  const childRef = useRef();

  const [count, setCount] = useState(null);

  const getValueFromChild = () => {
    if (childRef.current.checkCount){
      setCount(childRef.current.checkCount);
    }
  }

  return (
    <div className="App">
      <Child ref={childRef} />
      <h2>{count}</h2>
      <button onClick={() => childRef.current.focusInput()}>focus</button>
      <button onClick={getValueFromChild}>Get value from child</button>
    </div>
  );
};

export default App;
