import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useState } from 'react';

const Main = () => {
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox);

    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
  return (
      <div>
          <form>
              <label>First Name</label>
              <input placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} />
              
              <label>Last Name</label>
              <input placeholder='lastName' onChange={(e) => setLastName(e.target.value)} />
              
              <input type="checkbox" label="I agree tc" onChange={(e) => setCheckbox(!checkbox)} />
              
              <button onClick={postData} >Submit</button>
          </form>
    </div>
  )
}

export default Main