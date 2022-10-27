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
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getData();
    }, []);
  return (
      <div>
          {data.map((el)=>{
              <div>{el.userId}</div>
         })}
    </div>
  )
}

export default Request