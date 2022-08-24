import React from 'react'

function NameListFive() {
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
    return(
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(person => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                                <td>{person.skill}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NameListFive