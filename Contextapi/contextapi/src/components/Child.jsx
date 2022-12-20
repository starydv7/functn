import React, { useContext } from 'react';
import { GlobalData } from '../App';
const Child = () => {
    const { AppColor } = useContext(GlobalData);
    console.log(AppColor);
  return (
      <div>
          <h1 style={{color:AppColor}}>Child</h1>
      </div>
  )
}

export default Child