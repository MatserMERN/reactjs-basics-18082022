import React from 'react'

function NameListFour() {
    const persons = [
        {
            id: 1,
            name: "Scott",
            age: 46,
            skill: "ReactJS"
        },
        {
            id: 2,
            name: "Adam",
            age: 44,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Tuan",
            age: 42,
            skill: "VueJS"
        },
        {
            id: 4,
            name: "Uma",
            age: 40,
            skill: "JavaScript"
        },
    ]
    const personList = persons.map(person => {
        return <h2 key={person.id}>
            {person.name} is {person.age} years old and he is good with {person.skill}
            </h2>
    })
    return personList
}

export default NameListFour