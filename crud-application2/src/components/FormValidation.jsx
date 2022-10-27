import React from 'react'
import { useState } from 'react';

const FormValidation = () => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
        />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="user id" />
      </form>
    </div>
  );
}
export default FormValidation;