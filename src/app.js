const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Trigger"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Visla")
    ])
}

const app = () => {
    return React.createElement("div", {}, 
        React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
        
    ]))
}

ReactDOM.render(React.createElement(app), document.getElementById("root"))   