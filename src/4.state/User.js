import React, { Component } from 'react'

 class User extends Component {
    constructor(){
        super()

        this.state = {
            id: 1,
            name: "Scott",
            city: "Boston",
            isAdmin: true,
        }
    }
  render() {
    const {id, name, city, isAdmin} = this.state
    return (
      <div>
        <h4>ID: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>City: {city}</h4>
        <h4>IsAdmin: {isAdmin ? "True": "False"}</h4>
      </div>
    )
  }
}

export default User