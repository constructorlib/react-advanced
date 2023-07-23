import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  if (loading) return <h2>loading...</h2>;
  // I can set up whatever here
  else return <p>Hey!</p>;
};

export default MultipleReturns;
