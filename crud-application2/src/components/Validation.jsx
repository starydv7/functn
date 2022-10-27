import React, { useState } from 'react';


const Validation = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  return (
      <div>
          <form>
              <input type='text' placeholder="name" />
              <input type="text"placeholder="password"/>
          </form>
    </div>
  )
}

export default Validation