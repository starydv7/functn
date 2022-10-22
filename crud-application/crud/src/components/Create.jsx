import React,{useState} from 'react'

const Create = () => {
     const [fname, setFname] = useState("");
     const [lname, setLname] = useState("");
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email,
            "avatar":avatar,
        }
        fetch("https://www.mecallapi.com/api/users/create", {
            method: "POST",
            headers:{
            Accept: "application/foem-data",
                "Content-Type": "application/json",
                
            },
            body:JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(result['message'])
                if (result['status' === "Ok"]) {
                    window.location.href = "/create";
                }
        })
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
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              label="First Name"
            />
          </div>
          <div>
            <label
            
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
            
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
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
              placeholder="Email address"
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
              placeholder="janeDoe"
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
            
              id="grid-image"
              type="text"
              placeholder="Image link"
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Create