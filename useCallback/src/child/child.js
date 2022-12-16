import React, { useEffect } from "react";
import styles from './child.module.css';

const Child = ({count, changeTheme, theme}) => {
    
    //just to check whether this component re-render if the changeTheme props changes
    useEffect(() => {
        console.log('changeTheme changed');
    }, [changeTheme])

    return (
        <div className={styles.countContainer}
             style={theme ? {backgroundColor: 'black', color: 'white'}: {backgroundColor: 'white', color: 'black'}}>
            <h1>{count}</h1>
            <button onClick={changeTheme}>change theme</button>
        </div>
    )
}

export default Child;
