import React,{useState,useEffect} from 'react'
import useParams from "react-router-dom";
const Update = (id) => {
  const { id } = useParams();
  return (
    <div>Update</div>
  )
}

export default Update