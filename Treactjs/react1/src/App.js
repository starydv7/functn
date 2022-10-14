import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState([
    { id: 1, userName: "Pawan", age: 24 },
    {
      id:2,userName:"yadav",age:23
    }
  ])
 
  const handleDelete=(id)=>{
    const newData = data.filter(data=>data.id!==id)
    setData(newData);
  }
  
  return (
    <div className="App">
      <h2>Details</h2>
      {data.map((el, i)=> {
        return (
          <div key={el.id} className="flex">
           
           
            <div>{el.userName}</div>
            <div>{el.id}</div>
            <button onClick={()=>handleDelete(data.id)}>Delete</button>
          </div>
        )
      })}
<Main/>
    </div>
    
  );
}

export default App;
