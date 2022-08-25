import React, {useState, useEffect} from 'react'

const ApiUsingHook = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])

  return (
    <div className="container">
        <h1>Student List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => {
                        const {_id, name, email, city} = student
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{city}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ApiUsingHook