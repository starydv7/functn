import React, { useContext } from 'react';
import { GlobalData } from '../App';

const SuperChild = () => {
    const { AppColor } = useContext(GlobalData);
  return (
      <div>
          <h3 styles={{color:AppColor}}>Super Child</h3>
    </div>
  )
}

export default SuperChild