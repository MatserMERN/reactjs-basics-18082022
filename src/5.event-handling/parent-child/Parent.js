import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()

        this.state ={
          name: "Parent"
        }

        //this.callParent = this.callParent.bind(this)
    }

    callParent =(child) =>{
      //alert(`Calling ${this.state.name} from ${child}`)
      this.setState({
        name: child
      }, () => alert(`Calling ${this.state.name} from ${child}`))

    }
  render() {
    console.log("render is called")
    return (
      <div>
        <Child message="Calling Parent" callParent={this.callParent}/>
      </div>
    )
  }
}

export default Parent