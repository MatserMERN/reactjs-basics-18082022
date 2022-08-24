import React from 'react'

const NameListThree = () => {
    const names =["Scott", "Adam", "Tuan" ,"Adam"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return nameList
}

export default NameListThree