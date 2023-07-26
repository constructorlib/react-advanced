import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

// const names = ["Abbas", "Fatima", "Aziz", "Sumiya"];

// const myForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     cb(element);
//   }
// };

// myForEach(names, console.log);

function orderPizza(callback) {
  setTimeout(() => {
    let pizza = "🍕";
    callback(pizza);
  }, 2000);
}

function isReady(pizza) {
  console.log(`Eat me ${pizza}`);
}

orderPizza(isReady);

// Removed the problematic if block.
console.log("Call Abu Bakr");

// Async = part of code depends on some other part of code
// function myLog(name) {
//   console.log(name);
// }
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("dflt usr");
  if (loading) return <h2>loading...</h2>;
  if (isError) return <h2>error... </h2>;
  return <p>Hey!</p>;

  //   // I can set up whatever here
};

export default MultipleReturns;
