import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "./main.module.css";

const Main = () => {
  const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://spaimas.herokuapp.com/students")
          .then((res) => res.json())
          .then((result) => {
            setUsers(result);
          });
  };
  const handleNavigate=() => {
    navigate("update");
  }
    const handleCreate = () => {
      navigate("create");
    };
 
  
  const DeleteUser = (id) => {
    var data = {
      id: id,
    };
    fetch("https://www.mecallapi.com/api/users/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          fetchData();
        }
      });
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
                <button  onClick={handleCreate}>Create</button>
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
                    <div key={user.id}>{user.id}</div>
                  </td>
                  <td>
                    <div>
                      <img src={user.avatar} alt="avatar" />
                    </div>
                    <div>
                      <span>
                        {user.fname}
                        <span>{user.lname}</span>
                      </span>
                    </div>
                  </td>
                  <td>
                    <button onClick={handleNavigate}>EDIT</button>
                    <button
                      onClick={() => DeleteUser(user.id)}
                    >
                      DELETE
                    </button>
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