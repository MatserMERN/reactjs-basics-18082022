import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()

        this.state ={}
        console.log("Constructor of class B")
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps of class B")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount of class B")
    }

  render() {
    console.log("render of class B")
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB