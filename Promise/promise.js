// To create a promise, first of all we need to create a instance object using the promise constructor function.

const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    console.log(num)
    if (num <=105) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    }
  });
  
  function handleResolve(value) {
    console.log(value);
  }
  
  function handleReject(reason) {
    console.error(reason);
  }
  promise.then(handleResolve, handleReject);