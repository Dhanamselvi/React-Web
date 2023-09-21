import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
                    <h1>
                        React JSX (React Element)
                    </h1>
                );

const Title = () => {
    return (
        <h2>React Functional Component Title</h2>
    )
}
// React Functionl Component
const HeadingComponent = () =>{
    return (
        <div id="container">
            <Title />
            {heading}
            <h1>React Functional Component Heading</h1>
        </div>
    )
}

console.log(Title()) // Object
console.log(HeadingComponent()) // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);