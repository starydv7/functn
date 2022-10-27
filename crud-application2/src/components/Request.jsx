import React,{useState} from 'react'
import axios from "axios";
import { useEffect } from 'react';
const Request = () => {
    const [data, setData] = useState([]);


    function getData() {
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/todos",
        })
            .then((res) => setData(res.data))
       // console.log(res.data)
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getData();
    }, []);
    console.log(data);
  return (
      <div>
          <h1>List users</h1>
          {data.length>0 && data.map((el)=>{
              <div>{el.title}</div>
         })}
    </div>
  )
}

export default Request