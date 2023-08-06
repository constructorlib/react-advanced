import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0); // initialState, updateState
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages (${value})`;
    } else {
      document.title = `No Messages`;
    }
  }, [value]);
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
};

export default UseEffectBasics;
/*
useEffect works when component renders

 useEffect(() => {
    if (value == 1) {
      document.title = `Yeah boi (${value})`;
      setValue(value + 999);
      // setValue(value + 0);
    }
  });

  So yeah, when I press onClick, the value increases or resets
*/
