import React,{useState} from 'react'

const Create = () => {
     const [fname, setFname] = useState("");
     const [lname, setLname] = useState("");
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [avatar, setAvatar] = useState("");
  return (
    <div>Create</div>
  )
}

export default Create