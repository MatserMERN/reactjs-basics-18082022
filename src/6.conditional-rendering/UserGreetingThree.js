import React, { Component } from 'react'

export class UserGreetingThree extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return(
            this.state.isLoggedIn ? <div><h1>Hello Scott</h1></div>
                                  : <div><h1>Hello Guest</h1></div>
        )
    }
}

export default UserGreetingThree