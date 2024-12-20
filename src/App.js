import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Radio, Space, Tooltip } from "antd";
import FavorateColor from "./components/MyCrud.js";
import Car from "./components/Car";
import PersonList from "./components/PersonList.js";
import MainPage from "./components/MainPage.js";
import CrudApp from "./crud/CrudApp.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TestBody from "./components/TestBody.js";
import CRUD from "./components/CRUD.js";
import HtmlBS from "./components/HtmlBS.js";
import CRUDOperations1 from "./components/CRUDOperations1.js";
import MyCrud from "./components/MyCrud.js";

const App = () => {
  // const [position, setPosition] = useState("end");
  return (
    <>
      {/* <FavorateColor />
      <br></br>
      <Car />
      <PersonList />
      <MainPage /> */}
      {/* <h1>Test</h1> */}
      {/* <CrudApp /> */}
      {/* <TestBody /> */}
      {/* <CrudApp /> */}
      {/* <CRUDOperations1 /> */}
      <p></p>
      {/* <CRUD /> */}
      {/* <HtmlBS /> */}
      <MyCrud />
    </>
  );
};
export default App;
