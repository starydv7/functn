import React, { useState } from 'react';


const Validation = () => {
    const [name, setName] = useState("");
    const [user, setUserId] = useState("");
  return (
      <div>
          <form>
              <input type='text' placeholder="name" />
              <input type="text"placeholder="userId"/>
          </form>
    </div>
  )
}

export default Validation