## What is a promise?

`A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it's not resolved(for example, network error). It will be in one of the 3 possible states:  fulfilled, rejected, or pending `

## The syntax of Promise creation looks like below,

const promise = new Promise(function (resolve, reject){
    // promise description
})

## The usage of a promise would be as below,

const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));



## Why do you need a promise ?

`Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.`


## What are the three states of promise
 
Promises have three states:

1. Pending: This is an initial state of the Promise before an operation begins
2. Fulfilled: This state indicates that the specified operation was completed.
3. Rejected: This state indicates that operation did not complete. In this case an error value will be thrown.


