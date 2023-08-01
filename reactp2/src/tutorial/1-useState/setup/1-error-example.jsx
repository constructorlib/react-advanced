import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Random Title");
  // console.log(title);
  let clickHandler = () => {
    if (title == "Random Title") {
      setTitle("Hello World");
    } else {
      setTitle("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Change me!
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
/*
  8/1/2023 review
  Here I used useState, lets examine it. 
  const [title, setTitle] = useState("Random Title");
  I declared const title and function setTitle
  Equal to what? Is this a default state? Do check out. 

  UPD: It is, it is actually a default state. setTitle changes the default state. Much interesting. 

  

*/
