import axios from "axios";
import { useState } from "react"

const MyComponent = () =>{
    const [name,setName] = useState("defaultName");
    const [age,setAge] = useState("");

    const handleButtonClick = async () => {
        try{
       const response=await axios.get("http://demo8286421.mockable.io/test")
       const data=response.data;
       if(data.length > 1){
        setName(data[1].name);
        setAge(data[1].age);
       }
    }catch(error){
        console.error(error)
    }
   };


   return (
    <div>
      <div>
        <label>
          Name:
          <input type="text" value={name} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="text" value={age}  />
        </label>
      </div>
      <button onClick={handleButtonClick}>Fetch Data</button>
    </div>
   );
}

export default MyComponent;