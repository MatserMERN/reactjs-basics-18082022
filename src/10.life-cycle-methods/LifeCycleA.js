import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()

        this.state ={}
        console.log("Constructor of class A")
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps of class A")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount of class A")
    }

  render() {
    console.log("render of class A")
    return (
      <div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA