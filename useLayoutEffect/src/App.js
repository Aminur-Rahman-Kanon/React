import { useLayoutEffect } from "react";
import './App.css';

const App = () => {

  useLayoutEffect(() => {
    for (let i=0; i<2000000000; i++){

    }

    console.log('useLayoutEffect executed');
  }, [])

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
