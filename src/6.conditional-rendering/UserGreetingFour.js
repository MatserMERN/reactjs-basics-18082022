import React, { Component } from 'react'

export class UserGreetingFour extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return(
            this.state.isLoggedIn && <div><h1>Hello Scott</h1></div>
        )
    }
}

export default UserGreetingFour