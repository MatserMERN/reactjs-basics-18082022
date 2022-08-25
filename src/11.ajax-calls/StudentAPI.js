import React, { Component } from 'react'
import { realStudentAPI } from '../ApiStore/realStudentApi'

export class StudentAPI extends Component {
    constructor() {
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount() {
        this.getStudents()
    }

    getStudents() {
        realStudentAPI.get("/students")
            .then(response => this.setState({ students: response.data }))
    }

    clearFields() {
        this.setState({
            _id: '',
            name: '',
            email: '',
            city: ''
        })
    }

    addStudent() {
        const student = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        }

        realStudentAPI.post("/students", student)
            .then(() => {
                this.getStudents()
                this.clearFields()
            })
    }

    editStudent(student){
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city
        })
    }

    updateStudent(){
        const id = this.state._id
        const student = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        }

        realStudentAPI.put(`/students/${id}`, student)
            .then(() => {
                this.getStudents()
                this.clearFields()
            })
    }

    deleteStudent(studentId){
        realStudentAPI.delete(`/students/${studentId}`)
            .then(() => this.getStudents())
    }

    render() {
        return (
            <div>
                <h1>Student List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th>
                                <input type="text"
                                    value={this.state.name}
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.city}
                                    onChange={(event) => this.setState({ city: event.target.value })}
                                />
                            </th>
                            <th>
                                <button className="btn btn-primary"
                                    onClick={() => this.addStudent()}
                                >Add</button>&ensp;
                                <button className="btn btn-warning"
                                        onClick={() => this.updateStudent()}
                                >Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={() => this.editStudent(student)}
                                        >Edit</button>&ensp;
                                        <button className="btn btn-danger"
                                                onClick={() => this.deleteStudent(student._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentAPI