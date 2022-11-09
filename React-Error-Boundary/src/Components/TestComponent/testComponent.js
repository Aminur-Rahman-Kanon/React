import React from 'react';
import styles from './testComponent.module.css';
import { useErrorHandler } from 'react-error-boundary';

function TestComponent() {

    const handleError = useErrorHandler();

    const generateError = () => {
        handleError('Custom generated Error');
        throw new Error('Custom generated error')
    }

    return (
        <div className={styles.main}>
            <div className={styles.headingContainer}>
                <h1>This is the Test Compoent</h1>
                <p>Click the button below to generate an error</p>
            </div>

            <div className={styles.btnContainer}>
                <button onClick={generateError} className={styles.generateBtn}>Generate an error</button>
            </div>

        </div>
    )
}

export default TestComponent
