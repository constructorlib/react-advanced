import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // window.ezzz
  });
  return (
    <>
      {/* Foo */}
      <h1>window</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;
