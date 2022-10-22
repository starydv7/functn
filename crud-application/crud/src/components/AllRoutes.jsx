import React from 'react'
import { Routes, Route } from "react-router-dom";
import Create from './Create';
import Home from './Home';
import Main from './Main';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes