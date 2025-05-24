// Universal Selector
let element = document.querySelector("*");
console.log(element);

let elements = document.querySelectorAll("*");
console.log(elements);

// Type Selector
let firstHeading = document.querySelector("h1");
console.log(firstHeading);

let heading2 = document.querySelectorAll("h2");
console.log(heading2);

// Class Selector
let note = document.querySelector(".menu-item");
console.log(note);

let notes = document.querySelectorAll(".menu-item");
console.log(notes);

// ID Selector
let logo = document.querySelector("#logo");
console.log(logo);

// Attribute Selector
let autoplay = document.querySelector("[autoplay]");
console.log(autoplay);
let autoplays = document.querySelectorAll("[autoplay]");
console.log(autoplays);
// To select all elements that have a given attribute, you use one of the following attribute selector syntaxes:

// [attribute]
// [attribute=value]
// [attribute~=value]
// [attribute|=value]
// [attribute^=value]
// [attribute$=value]
// [attribute*$*=value]

// Grouping Selectors
let groupingSelectors = document.querySelectorAll('div, p');
