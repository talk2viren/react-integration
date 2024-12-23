// Quokka.js example

import axios from "axios";
import _ from "lodash";

// let restCall = async () => {
//   let restCall = await fetch("https://reqres.in/api/users?page=2");
//   let dataResponse = await restCall.json();
//   console.log(`Response >> ${JSON.stringify(dataResponse.data)}`);
// };

// let axiosExample = async () => {
//   let restCall = await axios.get("https://reqres.in/api/users?page=2");
//   let exData = restCall.data;
//   console.log(exData);
// };

// const response=(await axios.get("http://demo8286421.mockable.io/test")).data;

// ( asyn () =>{
//     const resonsePromise =async() => {await axios.get("https://demo8286421.mockable.io/test");}
// const respData = resonsePromise.data;
// })();

(async () => {
  const resonsePromise = async () => {
    try {
      const respData = await axios.get("http://demo8286421.mockable.io/test1");
      console.log(respData.data);
    } catch (error) {
      console.error(error);
    }
  };

  resonsePromise();
})();

console.log("Before");
// restCall();
// axiosExample();
console.log("after");
