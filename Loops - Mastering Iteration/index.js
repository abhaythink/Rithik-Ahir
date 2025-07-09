// ------------------- FOR LOOP ------------------------------

let arr = ["one", "two", "three", "four"];
let obj = { 1: "one", 2: "two", 3: "three" };

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
  console.log("hello");
} //Not working on Objects

// Function to reverse a array using For loop

const revFunc = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
};
revFunc(arr);
console.log("---------END OF FOR LOOP OUTPUT----------------");

//------------------------------------- FOR IN -------------------------------------

let arr1 = [1, 2, 3, 4, 5];
for (let num in arr1) {
  console.log(arr1[num]);
}
let obj1 = { 1: "one", 2: "two", 3: "three" };
for (let key in obj) {
  console.log(`${key} and ${obj[key]}`);
}

console.log("---------END OF FOR-IN LOOP OUTPUT----------------");

// ------------------------------- FOR OF -----------------------------------------

arr = ["one", "two", "three", "four"];
let text = "";
for (let i of arr) {
  text += i + " ";
  console.log(i);
}
console.log(text);

obj1 = { 1: "one", 2: "two", 3: "three" };

for (let x of Object.keys(obj1)) {
  console.log(x);
}
for (let x of Object.values(obj1)) {
  console.log(x);
}
for (let [x, y] of Object.entries(obj1)) {
  console.log(`key: ${x}, Value: ${y}`);
}

let revFunc1 = (arr) => {
  let result = [];
  for (let x of arr) {
    console.log(x);
    result.unshift(x);
  }
  console.log(result);
};
revFunc1(arr);
console.log("---------END OF FOR-OF LOOP OUTPUT----------------");

//--------------------------- WHILE LOOP ----------------------------------
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

arr = ["one", "two", "three", "four"];
i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

obj1 = { 1: "one", 2: "two", 3: "three" };
i = 0;
let keys = Object.keys(obj1);
console.log(keys);
while (i < keys.length) {
  console.log(keys[i], obj1[keys[i]]);
  i++;
}
console.log("---------END OF WHILE LOOP OUTPUT----------------");
// --------------------------- DO-WHILE ------------------------------------

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

arr = ["one", "two", "three", "four"];
i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

obj1 = { 1: "one", 2: "two", 3: "three" };
i = 0;
keys = Object.keys(obj1);
do {
  console.log(keys[i], obj1[keys[i]]);
  i++;
} while (i < keys.length);

console.log("---------END OF DO-WHILE LOOP OUTPUT----------------");
