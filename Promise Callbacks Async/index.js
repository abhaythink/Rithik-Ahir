// ------------------------- CALL BACK -----------------------------------------
function message(msg) {
  console.log(msg);
}
function firstCall() {
  message("hello i am first call");
}
function secondCall() {
  message("hello i am second call");
}

firstCall();
secondCall();
//--------------

// function calculator(num1, num2) {
//   let sum = num1 + num2;
//   result(sum);
// }
// function result(result) {
//   console.log(result);
// }

// calculator(10, 20);

// Above funtion converting to a call back function.

function calculator(num1, num2, callBack) {
  let sum = num1 + num2;
  callBack(sum);
}
function result(result) {
  console.log(result);
}

calculator(10, 20, result);
console.log("--------------END OF CALLBACK-------------------");

// ----------------------------------------- CallBack Hell --------------------------------

const task1 = (callback) => {
  setTimeout(() => console.log("i am task 1"), 0);
  callback();
};

const task2 = (callBack) => {
  setTimeout(() => console.log("i am task 2"), 0);
  callBack();
};

const task3 = (callBack) => {
  setTimeout(() => console.log("i am task 3"), 0);
  callBack();
};

task1(function () {
  task2(function () {
    task3(function () {
      console.log("All task Are Completed");
    });
  });
});

const cart = ["shoes", "pants", "shirts"];

console.log("--------------END OF CALLBACK HELL-------------------");

//-------------------------------------- Promises -----------------------------------------------

const greet = (val) => {
  console.log(val);
};

let promise = new Promise((res, rej) => {
  let x = 0;
  if (x == 0) {
    res("Good Morning");
  } else {
    rej("Error");
  }
});

promise.then((msg) => greet(msg)).catch((err) => console.log(err));

const promise2 = new Promise((res, rej) => {
  let succes = true;

  setTimeout(() => {
    if (succes) {
      res("Promise is resolved");
    } else {
      rej("error in promise");
    }
  }),
    2000;
});

promise2
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("promise is done succesfully");
  });
console.log("--------------END OF PROMISES-------------------");
// ----------------------------- ASYNC AND AWAIT ------------------------------

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("hello good morning");
  }, 3000);
});

const promise4 = new Promise((res) => {
  setTimeout(() => {
    res("hello good night");
  }, 8000);
});

const newFunc = async () => {
  console.log("Inside async funtion");
  const data = await promise3;
  console.log(data);
  const data2 = await promise4;
  console.log(data2);
  console.log("The data is fetched");
};

newFunc();
console.log("after all the async funtions");

//  CALLBACK ----> PROMISE ------> ASYNC/AWAIT

function sayHello(callback) {
  setTimeout(() => {
    console.log("Hello from callback!");
    callback();
  }, 1000);
}

sayHello(() => {
  console.log("Callback finished!");
});

// in promise

const sayHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello from Promise!");
      resolve();
    }, 1000);
  });
};

sayHello.then(() => {
  console.log("Promise finished!");
});

// in Async await

const sayHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello from async/await!");
      resolve();
    }, 1000);
  });
};

const run = async () => {
  const data = await sayHello();
  console.log(data);
  console.log("Async/await finished!");
};

run();
