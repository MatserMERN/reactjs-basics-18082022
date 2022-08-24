import React from 'react'

const NameListOne = () => {
    const names =["Scott", "Adam", "Tuan"]
  return (
    <div>
        <ul className="list-group">
            <li className="list-group-item">{names[0]}</li>
            <li className="list-group-item">{names[1]}</li>
            <li className="list-group-item">{names[2]}</li>
        </ul>
    </div>
  )
}

export default NameListOne