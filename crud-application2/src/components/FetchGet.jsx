import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const FetchGet = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
    useEffect(() => {
      getData();
    }, [])
  function getData() {
     fetch("https://apipawan3.herokuapp.com/users").then((result) => {
       result.json().then((resp) => {
         console.log("result", resp);
         setData(resp);
       });
     });
  }
  const handleDelete = (id) => {

    fetch(`https://apipawan3.herokuapp.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
      });
    });
  }
    const saveUser = () => {
        let dataPost={name,title,mobilenumber,email}
        console.log(name, title, mobilenumber);
        fetch("https://apipawan3.herokuapp.com/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "aplication/json",
          },
          body: JSON.stringify(dataPost),
        }).then((result) => {
          result.json().then((resp) => {
            console.log("resp", resp);
            setData(resp);
          });
        });
    }
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          value={title}
          placeholder="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={mobilenumber}
          placeholder="mobilenumber"
          name="mobilenumber"
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={saveUser}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Sava Data to Api
        </button>
        <br />
        <br />
      </form>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <span>ID:-</span> {item.id}:-
              <span>Title:{item.title}</span>
              <span>EMail:{item.email}</span>
              <span>Mobile Number{item.mobilenumber}</span>
              <span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </span>
            </div>
          );
        })}
    </div>
  );
}
export default FetchGet;