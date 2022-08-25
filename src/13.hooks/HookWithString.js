import React, {useState} from 'react'

const HookWithString = () => {
    const [name, setName] = useState("Scott")
    const [status, setStatus] = useState(false)
    
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>IsAdmin: {status ? "True" : "False"}</h1>
        <button className="btn btn-primary"
                onClick={() => {
                    setName("Scott Desatnick")
                    setStatus(true)
                }}
        >Change Name</button>
    </div>
  )
}

export default HookWithString