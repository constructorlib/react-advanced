import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("23");
  const [message, setMessage] = useState("random message");
  // alert("General Kenobi!");
  const changeMessage = () => {
    let hold = window.prompt("Change: name, age, message");
    let inputProcessed = false;
    if (hold !== "name" && hold !== "age" && hold !== "message") {
      alert("Invalid input! Please enter 'name', 'age', or 'message'.");
      return; // Exit the function if the input is invalid.
    }
    let holdnew = window.prompt("Enter: ");
    if (hold === "name") {
      setName(holdnew);
      inputProcessed = true;
    }

    if (hold === "age") {
      setAge(holdnew);
      inputProcessed = true;
    }

    if (hold === "message") {
      setMessage(holdnew);
      inputProcessed = true;
    }

    if (!inputProcessed) {
      alert("Abort!");
      window.location.reload(); // Refresh the page when no valid input is provided.
    }
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
