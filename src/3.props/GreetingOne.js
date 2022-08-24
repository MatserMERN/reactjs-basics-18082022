import React, { Component } from 'react'

export class GreetingOne extends Component {

    render() {
        const { id, name, isAdmin, department, grade, sayHello, getData, getMessage, address, skills, children } = this.props
        return (
            <div>
                <h4>Id: {id}</h4>
                <h4>Name: {name}</h4>
                <h4>IsAdmin: {isAdmin ? "True" : "False"}</h4>
                <h4>Department: {department ? department : "Department Details are not available"}</h4>
                <h4>Grade: {grade ? grade : "Grade Details are not available"}</h4>
                <h4>SayHello : {sayHello()}</h4>
                <h4>GetData: {getData()}</h4>
                <h4>GetMessage: {getMessage()}</h4>
                <h4>City: {address.city}</h4>
                <h4>Country: {address.country}</h4>
                <h4>Skills: {skills[0]}</h4>
                <h4>Child: {children}</h4>
            </div>
        )
    }
}

export default GreetingOne