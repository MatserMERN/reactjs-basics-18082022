import React from 'react'
import "./styling.css"

function Stylesheet(props) {
    const className = props.primary ? "primary" : "secondary"
  return (
    <div>
        <h1 className="{`${className} enlarge-text`}">This is header one</h1>
    </div>
  )
}

export default Stylesheet

