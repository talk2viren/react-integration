import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonList = () => {
  // const [persons, setPersons] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => {
    //     const persons = res.data;
    //     setPersons(persons);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the data!", error);
    //   });
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        const data = res.data.data;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error >> " + error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  // function myFunction() {
  //   axios
  //     .get("https://reqres.in/api/users/2")
  //     .then((res) => {
  //       const data = res.data;
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error >> " + error);
  //     });
  // }

  return (
    <>
      <ul>
        {data.map((data) => (
          // <li key={data.id}>{data}</li>
          // <li key={person.id}>{person.name}</li>
          <li key={data.id}> {JSON.stringify(data, null, 2)} </li>
        ))}
      </ul>
    </>
  );
};

export default PersonList;
