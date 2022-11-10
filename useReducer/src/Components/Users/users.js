import React, { useContext } from 'react';
import styles from './users.module.css';
import { CountContext } from '../../App';

function Users() {

    const countValue = useContext(CountContext)

    return (
        <div className={styles.userContainerMain}>
            <p>{`Count: ${countValue.count}`}</p>
        </div>
    )
}

export default Users
