/*
    How do we create the Sibling Element in React

        <div id="parent">
            <div id="child">
                <h1>Sibling 1 </h1>
                <h2>Sibling 2 </h2>
            </div>
        </div>
*/

// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [
            React.createElement(
                "h1",
                {},
                "Sibling 1"
            ),
            React.createElement(
                "h2",
                {},
                "Sibling 2"
            ),
        ]
    )
);

console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);