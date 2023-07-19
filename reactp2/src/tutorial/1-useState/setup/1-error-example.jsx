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
