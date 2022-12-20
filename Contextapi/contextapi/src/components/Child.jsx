import React, { useContext } from 'react';
import { GlobalData } from '../App';
const Child = () => {
    const { AppColor } = useContext(GlobalData);
    console.log(AppColor);
  return (
    <div>Child</div>
  )
}

export default Child