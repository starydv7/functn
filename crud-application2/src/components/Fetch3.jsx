import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Fetch3 = () => {
    const [user, setUsers] = useState([]);
    const FetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }
    useEffect(() => {
        FetchData();
    }, []);
  return (
      <div>
          <h1>User List</h1>
          <ul>
              {user && user.length > 0 && user.map((el, i) => (
                  <li key={user.id}>{el.name }</li>
              ))}
          </ul>
    </div>
  )
}

export default Fetch3