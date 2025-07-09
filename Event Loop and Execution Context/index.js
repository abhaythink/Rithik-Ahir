//-------------------------- CAll STACK AND EXECUTION CONTEXT ----------------------

const promise = new Promise((res) => {
  res("promise 1 is resolved");
});

const ExecutionOrder = async () => {
  console.log("START");

  setTimeout(() => {
    console.log("I am SetTimeout 1");
  }, 1000);

  Promise.resolve().then(() => console.log("Promise resolved"));

  setTimeout(() => {
    console.log("I am SetTimeout 2");
  }, 5000);

  const data = await promise;
  console.log(data);

  console.log("END");
};
ExecutionOrder();
