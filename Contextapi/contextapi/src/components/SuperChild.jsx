import React, { useContext } from "react";
import { GlobalData } from "../App";
// import SuperChild from "./SuperChild";
const SuperChild = () => {
  const { AppColor } = useContext(GlobalData);
//   console.log(AppColor);
  return (
    <div>
      <h1 style={{ color: AppColor }}>Child</h1>
      {/* <SuperChild /> */}
    </div>
  );
};

export default SuperChild;
