/* eslint-disable react/no-array-index-key */
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://demo8286421.mockable.io/test")
      .then((res) => {
        let resData = res.data;
        setData(resData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  //   const dataSource = [
  //     {
  //       key: "1",
  //       name: "Mike",
  //       age: 32,
  //       address: "10 Downing Street",
  //     },
  //     {
  //       key: "2",
  //       name: "John",
  //       age: 42,
  //       address: "10 Downing Street",
  //     },
  //   ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <>
      <h1>🚀</h1>
      <Table dataSource={data} columns={columns} />;{" "}
      {/* <Table dataSource={dataSource} columns={columns} />;{" "} */}
    </>
  );
};
export default MainPage;
