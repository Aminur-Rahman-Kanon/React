import { useCallback, useState } from "react";
import './App.css';
import Child from "./child/child";

const App = () => {

  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState(false);

  const changeThemeFunction = useCallback(() => {
    setTheme(!theme);
  }, [theme])

  return (
    <div className="App">
      <Child count={count} changeTheme={changeThemeFunction} theme={theme} />
      <button onClick={() => setCount(count + 1)}>increment count</button>
    </div>
  );
};

export default App;
