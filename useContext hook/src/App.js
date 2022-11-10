import React, { createContext, useState, Context } from 'react';
import styles from './App.module.css';
import ChildComponent from './Components/ChildComponent/childComponent';

export const UserDetailsContext = createContext(null);

function App() {

  const [userDetails, setUserDetails] = useState({
    username: 'Jack sparrow',
    age: '56',
    job: 'pirate'
  });

  return (
    <div className={styles.App}>
      <h2>This is the App component</h2>
      <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
        <ChildComponent />
      </UserDetailsContext.Provider>
    </div>
  );
}

export default App;
