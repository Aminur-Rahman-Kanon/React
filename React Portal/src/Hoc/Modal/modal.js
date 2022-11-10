import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

function modal(props) {

    const portal = document.getElementById('portal');

    if (!props.toggle) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalMain}>
            {props.children}
        </div>,
        portal)
}

export default modal
