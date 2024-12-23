import { Color } from 'antd/es/color-picker';
import React from 'react';

const W3 = (props) => {

  return (
    <>
    <h1 style={{color:"black",fontSize : "34px",backgroundColor:"pink"}}>Header {props.nameProp}</h1>
    {props.handleDept("viren dept")}


    </>
  )
}
W3.defaultProps = {"nameProp":"W3","cityProp":"New York"};

export default W3;
