import React from "react";

import styles from "./addcontact.module.css";
import { useState } from "react";
import { useEffect } from "react";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [contact, setContact]=useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const [github, setGithub] = useState("");
  const [url, setUrl] = useState("");
  const [linkdin, setLinkdin] = useState("");

   let handleSubmit = async (e) => {
     e.preventDefault();
     try {
       let res = await fetch("https://apipawan3.herokuapp.com/users", {
         method: "POST",
         body: JSON.stringify({
           name: name,
           email: email,
           contact:contact,
           role: role,
           url: url,
           github: github,
           linkdin:linkdin,
          
         }),
       });
       let resJson = await res.json();
       if (res.status === 200) {
         setName("");
         setEmail("");
         setContact("");
         setGithub('');
         setRole("");
         setUrl("");
         setLinkdin("");
         setMessage("User created successfully");
       } else {
         setMessage("Some error occured");
       }
     } catch (err) {
       console.log(err);
     }
   };



  return (
    <div className={styles.form - 1}>
      <div className="form-layout">
        <h3> Add Details Here</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-div">
            <label>Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Name"
              className={styles.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Contact Number</label>
            <br></br>
            <input
              type="text"
              value={contact}
              placeholder="Contact Number"
              className={styles.contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Email</label>
            <br></br>
            <input
              type="text"
              value={email}
              placeholder="Email"
              className={styles.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-div2">
            <label>Linkedin id</label>
            <br></br>
            <input
              type="url"
              value={url}
              placeholder="Linkdin Url"
              className={styles.url}
              onChange={(e) => setLinkdin(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Github Account</label>
            <br></br>
            <input
              type="url"
              placeholder="Github Url"
              value={github}
              className={styles.url}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Role</label>
            <br></br>
            <input
              type="text"
              placeholder="Frontend/Backend-Dev"
              className={styles.url}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <input type="submit" className={styles.btn} />
          <div>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;