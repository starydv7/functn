import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FetchGet = () => {
    const [data, setData] = useState([]);
  const [api, setApi] = useState("");
    useEffect(() => {
      getData();
    }, [])
  function getData() {
     fetch("https://apipawan3.herokuapp.com/users").then((result) => {
       result.json().then((resp) => {
         console.log("result", resp);
         setData(resp);
       });
     });
  }
  const handleDelete = (id) => {
    fetch(`https://apipawan3.herokuapp.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
      });
    });
  }
  return (
    <div>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <span>ID:-</span> {item.id}:-
              <span>Name:-{item.name},</span>
              <span>Date:-{item.date},</span>
              <span>Title:-{item.title},</span>
              <span>Email:-{item.email},</span>
              <span>Mobile Number:-{item.mobile},</span>
              <span>Avatar:-<img src={item.image}
                alt="photo"
                style={{ borderRadius: "1000px",width:"50px",height:"50px" }}
              /></span>
              <span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </span>
            </div>
          );
        })}
    </div>
  );
}
export default FetchGet;