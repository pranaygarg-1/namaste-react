

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "Hello World from React!"), React.createElement("h2", { id: "heading" }, "Hello World from React!")]), React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "Hello World from React!"), React.createElement("h2", { id: "heading" }, "Hello World from React!")])])
console.log(parent);
ReactDOM.createRoot(document.getElementById("root")).render(parent);
