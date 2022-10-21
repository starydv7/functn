import React, {useContext } from 'react'
import { AppContext } from './UseContext'
const User = () => {
    const { userName } = useContext(AppContext);
  return (
      <div>
          <h1>user:{userName}</h1>
    </div>
  )
}

export default User