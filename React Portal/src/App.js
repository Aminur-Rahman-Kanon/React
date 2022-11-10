import React, { useState } from 'react';
import styles from './App.module.css';
import Modal from './Hoc/Modal/modal';

function App() {

  const [name, setName] = useState('');

  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  }

  const displayName = <div className={styles.displayNameContainer}>
    <p>{name ? name : 'Nothing to display'}</p>
    <button onClick={toggleModal} className={styles.modalCloseBtn}>close</button>
  </div>

  return (
    <div className={styles.App}>
      <div className={styles.informationDisplayContainer}>
        <h3>This is a test project for demonstration of React Portal</h3>
        <p>Please Enter your name below to see it in a modal thats handles by React Portal</p>
        <p>Also please feel free to inspect the dom to check where the modal is coming from</p>
      </div>

      <div className={styles.inputContainer}>
        <input type="text"
               className={styles.inputName}
               onChange={(event) => setName(event.target.value)}
               placeholder="Enter your name"
               />
      </div>

      <div className={styles.nameDisplayContainer}>
        <button onClick={toggleModal} className={styles.nameDisplayBtn}>Display my name</button>
      </div>

      <Modal toggle={displayModal}>
        {displayName}
      </Modal>
    </div>
  );
}

export default App;
