import React from 'react'

const NameListTwo = () => {
    const names =["Scott", "Adam", "Tuan" ,"Adam"]
  return (
        <ul className="list-group">
            {
                names.map((name, index) => <li key={index} className="list-group-item">{name}</li>)
            }
        </ul>

  )
}

export default NameListTwo