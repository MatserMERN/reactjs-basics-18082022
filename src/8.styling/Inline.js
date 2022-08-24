import React from 'react'

const Inline = () => {

    const heading = {
        fontSize: '72px',
        color: "blue"
    }
  return (
    <div>
        <h1 style={heading}>Inline Styling One</h1>
        <h1 style={{fontSize: "72px", color: "Orange"}}>Inline Styling Two</h1>
    </div>
  )
}

export default Inline