import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("23");
  const [message, setMessage] = useState("random message");
  // alert("General Kenobi!");
  const changeMessage = () => {
    setMessage("hello there!");
    alert("General Kenobi!");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={() => changeMessage()}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
