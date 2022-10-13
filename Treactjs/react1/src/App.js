import { useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([
    { id: 1, userName: "Pawan", age: 24 },
    {
      id:2,userName:"yadav",age:23
    }
  ])
  var delData = data;
   const handleDelete=(item)=>{
    const delData =this.data.filter(i => i.id !== item.id)
  setData({delData})
  }
  return (
    <div className="App">
      <h2>Details</h2>
      {data.map((el, i)=> {
        return (
          <div key={el.id} className="flex">
           
           
            <div>{el.userName}</div>
            <div>{el.id}</div>
            <button onClick={handleDelete}>Delete</button>
          </div>
    
       
        )
      })}
    </div>
  );
}

export default App;
