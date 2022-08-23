import React from "react"

const Hello = () => {
    // return (
    //     <div id="parent" className="parent-one">
    //         <h1 id="child" className="child-one">Hello Scott</h1>
    //     </div>
    // )

    return React.createElement('div',
        { id: "parent", className: "parent-one" },
        React.createElement('h1',
            { id: "child", className: "child-one" },
            "Hello Scott"))
}

export default Hello