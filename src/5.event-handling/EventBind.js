import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello"
        }
        // 3rd way
        //this.changeMessage = this.changeMessage.bind(this)
        this.state.message ="Hey"
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: "Thank you"
    //     })
    // }

    changeMessage = () =>{
        console.log(this)
        this.setState({
            message: "Thank you"
        })
    }


  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> */}
         
        {/* 1st Way  */}
        {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change</button> */}

        {/* 2nd Way  */}
        {/* <button className="btn btn-primary" onClick={() =>this.changeMessage()}>Change</button> */}

        {/* 3rd Way  */}
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button>  */}

        {/* 4th Way  */}
        <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> 
      </div>
    )
  }
}

export default EventBind