// const fetchData = () => {
//   const axiosRequest = require("axios");
//   axiosRequest
//     .get("https://www.boredapi.com/api/activity")
//     .then((response) => {
//       console.log(`You could ${response.data.activity}`);
//     })
//     .catch((error) => {
//       console.log(`Error ${error}`);
//     });
// };
// export default fetchData;
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://www.boredapi.com/api/activity");
    console.log(`You could ${response.data.activity}`);
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

export default fetchData;
