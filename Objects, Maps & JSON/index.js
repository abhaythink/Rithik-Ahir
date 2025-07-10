// ------------------------ OBJECTS, MAPS and JSON -----------------

// Object literals

let obj = {
  name: "Rithik",
  lastName: "Ahir",
  age: 24,
  address: {
    city: "Pune",
    pincode: 411003,
  },
};

console.log(obj.address.city);
console.log(obj["address"]["city"]);

let name = "Rithik";
let lastName = "Ahir";
let age = 24;
let address = { city: "Pune", pincode: 411003 };

let obj2 = { lastName, age, address };
console.log(obj2.address);

// DOT NOTATION VS BRACKET NOTATION

obj = {
  name: "JS",
  age: 80,
  language: "javascript",
};

let myKey = "language";
// let result = obj.myKey; // this will not work because dot notation works with static value
let result = obj[myKey];
console.log(result);

// FOR IN .. AND OBJECT.KEYS()

obj = {
  name: "JS",
  age: 80,
  language: "javascript",
};

for (let properties in obj) {
  console.log(`Properties: ${properties} , Value: ${obj[properties]}`);
}

// MAP AND SET

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));

map1.set("a", 100);
console.log(map1.get("a"));
console.log(map1.size);
map1.delete("a");
console.log(map1);

// CONVERTING ARRAYS TO OBJECT AND VICE_VERSA

// Array  --> Object

const arr = ["one", "two", "three", "four"];
const obj1 = {};

arr.forEach((curr, i) => {
  obj1[i] = curr;
});

console.log(obj1);

// Object --> Array

const obj3 = { 1: "one", 2: "two", 3: "Three" };
const arr2 = [];

for (let key in obj3) {
  arr2.push([key, obj3[key]]);
}

console.log(arr2);

// Alternative

const arr3 = Object.entries(obj3);
console.log(arr3);
