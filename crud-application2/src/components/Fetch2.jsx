import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch2 = () => {
    const [data, setData] = useState('');
     function getData() {
       fetch("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
         result.json().then((resp) => {
          // console.log("result", resp);
             setData(resp);
         });
       });
     }
    useEffect(() => {
        getData();
    }, []);
   
  return (
    <div>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
                  <p>{item.title }</p>
            </div>
          );
        })}
    </div>
  );
}

export default Fetch2