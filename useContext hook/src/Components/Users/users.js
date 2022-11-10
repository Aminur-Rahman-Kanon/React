import React, { useContext, useState } from 'react';
import { UserDetailsContext } from '../../App';
import styles from './users.module.css';

function Users() {

    const [userDetails, setUserDetails] = useContext(UserDetailsContext);

    const [changeUser, setChangeUser] = useState({})

    const inputHandler = (event, inputType) => {
        switch(inputType){
            case 'username':
                setChangeUser({...changeUser, username: event.target.value})
                break;

            case 'age':
                setChangeUser({...changeUser, age: event.target.value})
                break;

            case 'job':
                setChangeUser({...changeUser, job: event.target.value})
                break;

            default:
                break;
        }
    }

    const submitChange = () => {
        if (Object.keys(changeUser).length === 0) return;
        setUserDetails(changeUser);
    }

    return (
        <div className={styles.userContainerMain}>
            <h3>This is the user component</h3>
            <div className={styles.userDisplayContainer}>
                <div className={styles.userDisplayGroup}>
                    <h3>{`Username: ${userDetails.username}`}</h3>
                    <input onChange={(event) => inputHandler(event, 'username')}
                           placeholder="Change Username"
                           className={styles.userChangeInput}
                           />
                </div>

                <div className={styles.userDisplayGroup}>
                    <h3>{`Age: ${userDetails.age}`}</h3>
                    <input onChange={(event) => inputHandler(event, 'age')}
                           placeholder="Change Age"
                           className={styles.userChangeInput}
                           />
                </div>

                <div className={styles.userDisplayGroup}>
                    <h3>{`Job: ${userDetails.job}`}</h3>
                    <input onChange={(event) => inputHandler(event, 'job')}
                           placeholder="Change Job"
                           className={styles.userChangeInput}
                           />
                </div>
            </div>

            <div className={styles.changeBtnContainer}>
                <button onClick={submitChange} className={styles.changeBtn}>Save changes</button>
            </div>
        </div>
    )
}

export default Users
