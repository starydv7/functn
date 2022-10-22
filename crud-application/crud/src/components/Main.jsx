import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Main = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        
    }, []);

    const fetchData = () => {
        fetch("https://www.mecallapi.com/api/users")
            .then((res) => res.json())
            .then((result) => {
                setUsers(result)
            })
    };
    return (
      <>
        <div>
          <div>
            {" "}
            <h3>Users List</h3>
          </div>
          <div>
            <span>
              <Link to="/main">
                <button type="button">Create</button>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Edit</th>
                <th>DELETE</th>
              </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.ID}>
                                <td>
                                    <div>
                                        {user.id}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img src={user.avatar} alt="avatar"/>
                                    </div>
                                    <div>
                                        <span>{user.fname}<span>{user.lname}</span></span>
                                    </div>
                                </td>
                                <td>
                                    <button>EDIT</button>
                                    <button>Delete</button>
                                </td>
                           </tr>
                       ))}
                    </tbody>
          </table>
        </div>
      </>
    );
}

export default Main;