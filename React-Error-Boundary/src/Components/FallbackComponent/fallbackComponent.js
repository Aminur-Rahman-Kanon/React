import React from 'react'
import bug from '../../Assets/bug.png';
import styles from './fallbackComponent.module.css';

function fallbackComponent({error, resetErrorBoundary}) {
  return (
    <div className={styles.errorBoundaryMain}>
        <div className={styles.errorBoundaryContainer}>
            <div>
                <h3>Something went wrong</h3>
                <p>{error.toString()}</p>
            </div>
            <button onClick={resetErrorBoundary} className={styles.reloadBtn}>Reload</button>
        </div>
        <div className={styles.errorBoundaryImg}>
            <img src={bug} alt="bug" className={styles.errorImg}/>
        </div>
    </div>
  )
}

export default fallbackComponent
