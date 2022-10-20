import React, { useEffect } from 'react';
import axios from "axios";
const UseEffect = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
            console.log(response.data);
         });
    })
  return (
      <div>
          
    </div>
  )
}

export default UseEffect