import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  console.log("hey");
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json(url);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;
