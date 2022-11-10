import React, { createContext, useState, useReducer } from 'react';
import styles from './App.module.css';
import ChildComponent from './Components/ChildComponent/childComponent';

export const CountContext = createContext(null);

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const initialState = { count: 0 }

const reducer = (state, action) => {

  switch(action.type){
    case ACTION.INCREMENT:
      return {
        count: state.count + 1
      }

    case ACTION.DECREMENT:
      return {
        count: state.count - 1
      }

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className={styles.App}>

      <h2>THis is the App component</h2>
      
      <div className={styles.btnContainer}>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })} className={styles.btn}>increment</button>
        <button disabled={state.count <= 0 ? true : false}
                onClick={() => dispatch({ type: ACTION.DECREMENT })}
                className={styles.btn}
                >decrement</button>
      </div>

      <CountContext.Provider value={state}>
        <ChildComponent />
      </CountContext.Provider>
    </div>
  );
}

export default App;
