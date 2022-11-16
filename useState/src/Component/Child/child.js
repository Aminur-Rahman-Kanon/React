import React from 'react'

function child(props) {
    const btns = {
        width: '100%',
        margin: '50px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const btnStyle = {
        height: '35px',
        width: '100px',
        margin: '10px',
        border: '1px solid lightgrey',
        borderRadius: '10px',
        cursor: 'pointer'
    }
  return (
    <div>
        <div style={btns}>
            <button style={btnStyle} onClick={props.increment}>Increment</button>
            <button style={btnStyle} onClick={props.decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default child
