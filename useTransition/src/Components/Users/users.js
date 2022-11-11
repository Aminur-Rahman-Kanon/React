import React from 'react';
import styles from './users.module.css';

function Users(props) {

    return (
        <div className={styles.userContainerMain}>
            <p>{props.value}</p>
        </div>
    )
}

export default Users
