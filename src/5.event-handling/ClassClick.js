import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Button Clicked - Class')
    }

  render() {
    return (
      <div>
        <h3>Button click using class component</h3>
        <button className="btn btn-primary"
                onClick={this.clickHandler}
        >Click Me</button>
      </div>
    )
  }
}

export default ClassClick