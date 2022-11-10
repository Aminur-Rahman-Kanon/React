import React from 'react'
import Users from '../Users/users'


function childComponent() {

  const childComponentStyle = {
    width: '100%',
    margin: '10px auto',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  return (
    <div style={childComponentStyle}>
        <h2>This is the child component</h2>
      <Users />
    </div>
  )
}

export default childComponent
