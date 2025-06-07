console.log(x); // undefined
var x = 5;

// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
// let y = 10;

foo();
function foo() {
  console.log("Inside foo"); // Inside foo
}

// bar(); // Uncaught TypeError: bar is not a function
// var bar = function () {
//   console.log("Inside bar");
// };

function test() {
  console.log(a); // undefined
  var a = 20;
}
test();

var a = 1;
function demo() {
  console.log(a); // undefined
  var a = 2;
}
demo();

console.log(typeof test); // function
function test() {}

// (function () {
//   console.log(a); // undefined
//   console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
//   var a = 3;
//   let b = 4;
// })();

function hoistExample() {
  if (false) {
    var x = 100;
  }
  console.log(x); // undefined
}
hoistExample();

let a = 10;
function print() {
  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 20;
}
print();
