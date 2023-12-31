import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (isError) return <h2>There is an Error!</h2>;
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );

  //
};

export default MultipleReturns;
