import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { studentAction } from '../14.redux/actions/studentAction'

const StudentReduxApi = () => {
   // const [students, setStudents] = useState([])
    const students = useSelector(state => state.studentList.students)
    const dispatch = useDispatch()

    const getStudents = async () =>{
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => dispatch(studentAction(data)))
    }

    useEffect(() => {
        getStudents()
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

export default StudentReduxApi