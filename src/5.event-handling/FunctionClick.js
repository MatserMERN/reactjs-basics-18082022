import React from 'react'

const FunctionClick = () => {

    function clickHandler(){
        console.log('Button Clicked - Function')
    }
  return (
    <div>
        <h3>Button click using function component</h3>
        <button className="btn btn-primary" onClick={clickHandler}>Click</button>
        {/* <button className="btn btn-primary" onClick={()=> clickHandler()}>Click</button> */}
    </div>
  )
}

export default FunctionClick