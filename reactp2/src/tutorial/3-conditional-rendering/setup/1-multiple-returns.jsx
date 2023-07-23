import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("dflt usr");
  if (loading) return <h2>loading...</h2>;
  if (isError) return <h2>error... </h2>;
  return <p>Hey!</p>;
  // I can set up whatever here
};

export default MultipleReturns;
