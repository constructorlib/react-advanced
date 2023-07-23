import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  if (loading) return <h2>loading...</h2>;
  else return <p>Hey!</p>;
};

export default MultipleReturns;
