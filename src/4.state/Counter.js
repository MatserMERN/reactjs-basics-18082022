import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super()

        this.state={
            count: 0
        }
       // this.state.count = 1
    }

    addCount(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))
        
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)
        // this.setState(prevState =>  {
        //     return {count: prevState.count + 1}
        // })
        this.setState(prevState =>  ({
            count: prevState.count + 1
        }))
    }
  render() {
    console.log("Render is called")
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-primary"
                onClick={() => this.addCount()}
        >Add Count</button>
      </div>
    )
  }
}

export default Counter