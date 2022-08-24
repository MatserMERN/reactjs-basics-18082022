import React from 'react'
import PropTypes from "prop-types"

const GreetValidateOne = (props) => {
    const {name, age} = props
  return (
    <div>
        <h4>In 5 years {name} will be {age + 5} years old</h4>
    </div>
  )
}

GreetValidateOne.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isAdmin: PropTypes.bool,
    department: PropTypes.oneOf([null, undefined]),
    grade: PropTypes.oneOf([null, undefined]),
    getMessage: PropTypes.func,
    address: PropTypes.shape({
      RoadNumber: PropTypes.number,
      Street: PropTypes.string
    }),
    skills: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
    status: PropTypes.oneOf(["Loading", "Ready"]),
    code: PropTypes.oneOfType([
      PropTypes.number, 
      PropTypes.string
    ]).isRequired,
    text: PropTypes.string.isRequired
    
}

GreetValidateOne.defaultProps = {
  text: "Hello"
}


export default GreetValidateOne