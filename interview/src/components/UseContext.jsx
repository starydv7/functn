import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';
export const AppContext = createContext(null);

const UseContext = () => {
    const [userName, setUserName] = useState("");
  return (
    <div>
      UseContext
          <AppContext.Provider value={(userName,setUserName)}>
              <Login/> <User/>
      </AppContext.Provider>
    </div>
  );
}

export default UseContext