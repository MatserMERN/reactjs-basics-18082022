import React, { Component } from 'react'

export class UserGreetingTwo extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let message
        if(this.state.isLoggedIn){
            message = <div><h1>Hello Scott</h1></div>
        } else {
            message = <div><h1>Hello Guest</h1></div>
        }
        return message
    }
}

export default UserGreetingTwo