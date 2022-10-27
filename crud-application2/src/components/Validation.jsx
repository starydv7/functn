import React, { useState } from 'react';


const Validation = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            console.log("Invalid");
        }
        console.log(e.target.value.length)
    }
  return (
      <div>
          <form onSubmit={handleChange}>
              <input type='text' placeholder="name"onChange={userHandler} />
              <input type="text"placeholder="password" onChange={userHandler}/>
          </form>
    </div>
  )
}

export default Validation