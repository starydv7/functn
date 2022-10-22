import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/create">Create List</Link>
      <Link to="/update">Update</Link>
      <Link to="/main">MainPage</Link>
    </div>
  );
}

export default Navbar