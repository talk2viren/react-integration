// import { Switch } from "antd";
import React, { useState,memo } from "react";

const Swatch = ({paramsName}) =>{
    console.log(`Swatch rendered ${paramsName.color}`);
    return(
        <div style={{padding:25,margin:50,width:175,height:75,backgroundColor:paramsName.color}}>
            <h1>Swatch</h1>
        </div>
    );
}

const MemoedSwatch = memo(Swatch);

const W3Memo = () => {

    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState("red");



    //   return (
//     <div style={{background: "pink url('image.png') repeat center center / cover"}}>
//       <h1>Inside W3Memo</h1>
//       <table    style={{width:"100%"}}>
//         <tr>
//           <td style={{backgroundColor:"blue",fontSize:20}}>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>

//         </table>

//     </div>
//   );
console.log("App rendered body")
return(
    <div>
        
            <h1>React Memo {color} + {appRenderIndex}</h1>
        <div>
            <div>
                
                <button onClick={()=>setAppRenderIndex(appRenderIndex + 1)}>Re-Render</button>
                <p></p>
                <button onClick={()=>setColor(color === "red" ? "blue" : "red")}>Change Color</button>
            </div>
            <div>
            <Swatch paramsName={{color}}/>
            </div>
        </div>

    </div>
);
}

export default W3Memo;