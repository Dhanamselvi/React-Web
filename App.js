/*
    How do we create the nested Element in React

        <div id="parent">
            <div id="child">
                <h1>Hello world from the React </h1>
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
        React.createElement(
            "h1",
            {},
            "Nested Element from the React"
        )
    )
);

console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);