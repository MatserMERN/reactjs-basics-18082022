import React from 'react'

const Child = ({message, callParent}) => {
  return (
    <div>
      <h3>{message}</h3>
      <button className="btn btn-primary" 
              onClick={()=>callParent('child')}
      >Call Parent</button>
    </div>
  )
}

export default Child