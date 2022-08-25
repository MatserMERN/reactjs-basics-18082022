import React, { useState } from 'react'

const HookUsingObject = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" })

    return (
        <div className="container">
            <h1>User Form</h1>
            <form>
                <div>
                    <label>FirstName</label>
                    <input type="text"
                        value={user.firstName}
                        className="form-control w-50"
                        onChange={(event) => setUser({...user, firstName: event.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>LastName</label>
                    <input type="text"
                        value={user.lastName}
                        className="form-control w-50"
                        onChange={(event) => setUser({...user, lastName: event.target.value })}
                    />
                </div>
            </form>

            <h2>Your Firstname is : {user.firstName}</h2>
            <h2>Your lastName is : {user.lastName}</h2>
        </div>
    )
}

export default HookUsingObject