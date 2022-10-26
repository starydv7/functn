import React,{useState} from 'react'
import { useEffect } from 'react';

const Navbar = () => {

  const [data, setData] = useState(0);
  const handleClick = () => {
    setData(data + 1);
  }
  useEffect(() => {
    console.log(setData)
  });
  //  console.log(data);
  return (
    <div>
      {data}
      {/* <h2></h2> */}
      <button onClick={handleClick}>{data}</button>
      
    </div>
  )
}
export default Navbar;