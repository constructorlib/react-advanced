import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState - 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter </h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <br /> <br />
        <h2>Delayed Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
        <button className="btn" onClick={complexDecrease}>
          decrease later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

/*
value, setValue: default being 0
complexIncrease()
basically a delayed counter. Where does prevstate come from?
 setValue((prevState) => {
setValue being 0? Yeah. 
Both delayed and normal counter work on the same value
prevState being connected to current value, we get n + 1 always. 
So this is pretty much everything I can do here, maybe make it more effecient later. 
*/
