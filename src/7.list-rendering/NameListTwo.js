import React from 'react'

const NameListTwo = () => {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
    return (
        <div>
            <ul className="list-group">
                {
                    names.map((name, index) => <li key={index} className="list-group-item">{name}</li>)
                }
            </ul>
            {/* <ul className="list-group">
              {
                    names.map((name, index) => <li key={index} className="list-group-item">{name}</li>)
                }
            </ul> */}
        </div>

    )
}

export default NameListTwo