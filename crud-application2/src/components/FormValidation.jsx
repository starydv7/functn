import React from 'react'
import { useState } from 'react';


const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userId, setUserId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <label>First Name</label>
        <br></br>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br></br>
        <label>Last Name</label>
        <br></br>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br></br>
        <label>Mobile Number</label>
        <br></br>
        <input
          type="number"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <br></br>
        <label>User ID</label>
        <br></br>
        <input
          type="text"
          placeholder="user id"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <br></br>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}
export default FormValidation;