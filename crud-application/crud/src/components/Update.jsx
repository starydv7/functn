import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

const Update = () => {
  const { id } = useParams();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    fetch(`https://www.mecallapi.com/api/users/`)
      .then((res) => res.json())
      .then((result) => {
        setFname(result.fname);
        setLname(result.lname);
        setUsername(result.username);
        setEmail(result.email);
        setAvatar(result.avatar);
        
      })
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      "id": id,
      "fname": fname,
      "lname": lname,
      "username": username,
      "email": email,
      "avatar":avatar,
    }
    fetch(`https://www.mecallapi.com/api/users/${id}`, {
      method: "PUT",
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
          window.location.href = "/";
        }
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label
             
            >
              First Name
            </label>
            <input
             
              id="grid-first-name"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              label="First Name"
            />
          </div>
          <div>
            <label
            
            >
              Last Name
            </label>
            <input
            
              id="grid-last-name"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              label="Last Name"
            />
          </div>
        </div>
        <div>
          <div>
            <label
             
            >
              Email Address
            </label>
            <input
             
              id="grid-first-name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
          </div>
          <div>
            <label
             
            >
              Username
            </label>
            <input
            
              id="grid-last-name"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
            />
          </div>
        </div>
        <div>
          <div>
            <label
              
            >
              Avatar
            </label>
            <input
             
              type="text"
              value={avatar}
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
         
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update