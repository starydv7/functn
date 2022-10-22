import React from 'react'
import { Routes, Route } from "react-router-dom";
import Create from './Create';
import Home from './Home';
import Main from './Main';
import Update from './Update';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/main" element={<Main />} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes