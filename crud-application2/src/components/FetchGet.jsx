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
                    console.log("result",resp)
                })
        })
    })
  return (
    <div>FetchGet</div>
  )
}

export default FetchGet