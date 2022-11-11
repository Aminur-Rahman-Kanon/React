import React, { useState, useTransition } from 'react';
import styles from './App.module.css';
import Users from './Components/Users/users';

function App() {

  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState([]);

  const inputHandler = (event) => {
    startTransition(() => {
      const test = []
      
      for (let x=0; x<10000; x++){
        test.push(event.target.value)
      }
  
      setValue(test)
    })
  }

  let display = isPending ? <p>Loading...</p> : value.map((item, index) => <Users key={index} value={item} />)

  return (
    <div className={styles.App}>
      <p>Please enter text in the input field</p>
      <input onChange={inputHandler}/>
      {display}
    </div>
  );
}

export default App;
