// ----------------------------VARIABLES IN JS ----------------------------------

// VAR REASIGNING AND SCOPING ------------------------------------

var v = "Thinkitive";
console.log(v);
var v = "Technologies";
console.log(v);
v = "Hello World";
console.log(v);
var v1;
v1 = "Hello";
console.log(v);

function funcVar() {
  var v = "In Function with same name";

  if (v) {
    var v = "I am Inside a block";
    console.log(v);
  }
  console.log(v);
}
funcVar();
console.log(v);

console.log(v);

console.log("----END OF VAR OUTPUT-----");
// LET REASSIGNING AND SCOPING ------------------------------------------

let i = "String with Let";
i = "Reassigning value";
console.log(i);
// let i = "Trying Redeclare";  //Redeclaring is not working
// console.log(i);

function funcLet() {
  let i = "using let inside a Function";

  if (i) {
    let i = "using inside a Block";
    console.log(i);
  }
  console.log(i);
}
funcLet();
console.log(i);
console.log("----END OF LET OUTPUT-----");

// CONST REASSIGNING AND SCOPING ------------------------------

const val = 10;
// val = 10;  // reassigning is not supported in const.
// const val = 20; // redeclaring is not supported with const.
console.log(val);

function funcConst() {
  let val = "using let inside a Function";

  if (val) {
    let val = "using inside a Block";
    console.log(val);
  }
  console.log(val);
}
funcConst();
console.log(val);

console.log("----END OF CONST OUTPUT-----");

//----------------------------------- DATA TYPES IN JS --------------------------------------

// STRING
let str = "String";
console.log(typeof str);

if (typeof str === "string") {
  console.log("str is a string");
}
console.log(`string` === "string");
console.log("1" + 1); // here 1 is coerced to number

console.log("----END OF STRING OUTPUT-----");

// NUMBER

let num = 10;
console.log(typeof num);
if (typeof num === "number") {
  console.log("num is a number");
} else if (typeof typeof num === "string") {
  console.log("the typeof of typeof of number is a string");
}

console.log(typeof Number("str") === "number");
console.log("1" - 1); // here "1" is coerced to 1
console.log(2 * "2"); // here "2" is coerced to 2
console.log("4" / 2); // here "4" is coerced to 4

console.log("----END OF NUMBER OUTPUT-----");
// BOOLEANS

console.log(typeof true);
console.log(typeof true == "boolean");
console.log(typeof Boolean(1) == "boolean");
console.log(typeof !!1 == "boolean");
console.log("----END OF BOOLEANS OUTPUT-----");
//NULL
let empty = null;
console.log(empty);
console.log(typeof null);
if (empty) {
  console.log("null is a truthy value");
} else {
  console.log("null is a falsy value");
}

console.log("----END OF NULL OUTPUT-----");

//UNDEFINED

let val2;
console.log(val2);
console.log(typeof val2);
val2
  ? console.log("undefined is Truthy value")
  : console.log("undefined is Falsy value");

console.log("----END OF UNDEFINED OUTPUT-----");

//OBJECT

let obj = { name: "Thinkitive", domain: "IT", employee: { empName: "xyz1" } };
console.log(typeof obj);
console.log(obj.employee.empName);
console.log(obj.employee["empName"]);

console.log("----END OF OBJECT OUTPUT-----");
