// descendant combinator
// To find descendants of a node, you use the space ( ) descendant combinator syntax:
// For example p a will match all <a> elements inside the p element:

let links = document.querySelector("p a");

// Child combinator
// The > child combinator finds all elements that are direct children of the first element:
// The following example finds all li elements that are directly inside a <ul> element:

let listItems = document.querySelectorAll("ul > li");

// To select all li elements that are directly inside a <ul> element with the class nav:
let listItems1 = document.querySelectorAll("ul.nav > li");

//General sibling combinator
// The ~ combinator selects siblings that share the same parent:
// For example, p ~ a will match all <a> elements that follow the p element, immediately or not:

let links1 = document.querySelectorAll("p ~ a");

// Adjacent sibling combinator
// The + adjacent sibling combinator selects adjacent siblings:
// For example, h1 + a matches all elements that directly follow an h1:

let links2 = document.querySelectorAll("h1 + a");
// Select the first <a> that directly follows an h1:
// let links = document.querySelector('h1 + a');
