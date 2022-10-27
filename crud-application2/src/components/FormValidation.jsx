import React from 'react'
import { useState } from 'react';

const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e)=>{setFirstName(e.target.value)}}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"

        />
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="user id" />
      </form>
    </div>
  );
}
export default FormValidation;