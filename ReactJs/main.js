{
  /* <div id="parent">
  <div id="child1">
    <h1>I am an h1 tag.</h1>
     <h2>I am an h2 tag.</h2>
  </div>
   <div id="child2">
    <h1>I am an h1 tag.</h1>
     <h2>I am an h2 tag.</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag."),
    React.createElement("h2", {}, "I am an h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag."),
    React.createElement("h2", {}, "I am an h2 tag."),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React"
);

console.log("Heading by React: ", heading); // return object

// React.createElement() is a function provided by the React library that creates and returns a React element. A React element is a plain JavaScript object that describes what you want to display on the screen.
// Syntax - React.createElement(type, props, ...children)

// Parameters
// type: The type of the element you want to create. It can be:
// A string (e.g., 'div', 'span') for HTML elements.
// A React component (e.g., MyComponent) for custom components.

// props: An object containing the attributes or properties for the element (e.g., className, id, etc.). Pass null if there are no props.

// ...children: The child elements or content inside the element. These can be strings, numbers, other React elements, or arrays of elements.

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("Root by React: ", root); // return object
// root.render(heading);
root.render(parent);
