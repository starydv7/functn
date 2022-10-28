import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const FetchGet = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        console.log("result", resp)
                        setData(resp);
                })
        })
    },[])
  return (
      <div>
          {
              data.length>0 &&
              data.map((item) => {
                  return (
                    <div key={item.id}>
                     <span>ID:-</span> {item.id}:-
                          
                          <span>Title:{item.title}</span>
                    </div>
                  );
              })
          }
    </div>
  )
}

export default FetchGet