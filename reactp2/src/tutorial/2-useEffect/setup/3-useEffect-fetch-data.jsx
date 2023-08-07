// import React, { useState, useEffect } from "react";

// const url = "https://api.github.com/users";

// const UseEffectFetchData = () => {
//   const [users, setUsers] = useState([]);
//   console.log("hey");
//   const getUsers = async () => {
//     const response = await fetch(url);
//     const users = await response.json(url);
//     // console.log(users);
//     setUsers(users);
//   };
//   useEffect(() => {
//     getUsers();
//   });
//   return (
//     <>
//       <h3>github users</h3>
//       <ul className="users">
//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h4>{login}</h4>
//                 <a href={html_url}>profile</a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default UseEffectFetchData;

// /*
// Look at it tomorrow.
// And start 3-conditional rendering from scratch.
// */
// const axiosRequest = require("axios");
// let response = axiosRequest.get("https://www.boredapi.com/api/activity");
// console.log(`You could: ${response.data.activity}`);
// export default UseEffectFetchData;
import React, { useState, useEffect } from "react";
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("https://www.boredapi.com/api/activity");
    console.log(`You could: ${response.data.activity}`);
    // Use the response data here or return it as needed
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export default fetchData;
