import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./main.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/create">Create List</Link>
      <Link to="/main/update">Update</Link>
      <Link to="/main">MainPage</Link>
      <Link to="/update">Update</Link>
    </div>
  );
}
export default Navbar;