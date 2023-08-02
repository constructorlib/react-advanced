import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("23");
  const [message, setMessage] = useState("random message");
  // alert("General Kenobi!");
  const changeMessage = () => {
    let hold = window.prompt("Change: name, age, message");
    let holdnew = window.prompt("Enter: ");
    if (hold == "name") setName(holdnew);
    if (hold == "age") setAge(holdnew);
    if (hold == "message") setMessage(holdnew);
    // else alert("Abort!"); // why is else working?
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
/*
Alriiight. What do we have here? 
const name, age, message with the appropriate functions that change them. 
Didn't use setName and setAge why? Pointless functions. Maybe try prompt? 
window.prompt()
prompt() is not a function, rather it is a method
why is else working tho?
*/
