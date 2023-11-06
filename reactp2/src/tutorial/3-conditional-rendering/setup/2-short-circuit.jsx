import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <div>
        {/* <h1>{firstValue}</h1>
        <h1>value: {secondValue}</h1> */}
        {!text && <h1>Dinora</h1>}
        {text && <h1>Dinora 1447</h1>}
        <button className="btn" onClick={() => setText("1447")}>
          click me!
        </button>
      </div>
    </>
  );
};
/*  
    Notice how it works different to plain discrete math:
    ya'ni: if A, then B; 
    whereas it usually works if A and B then ...
*/
export default ShortCircuit;
