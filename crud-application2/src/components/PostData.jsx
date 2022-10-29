import React,{useState} from 'react'
import axios from "axios";
const PostData = () => {
    const [data, setData] = useState({
        name: "",
        date: "",
        title: "",
        mobile: "",
        email: '',
        image:"",
    })
    function submit(e) {
        e.preventDefault();
        axios.post("https://apipawan3.herokuapp.com/users", {
            name: data.name,
            date: data.date,
            title: data.title,
            mobile: data.mobile,
            email: data.email,
            image:data.image,
        })
            .then((res) => {
                console.log(res.data);
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
        console.log("PostData",newdata);
    }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
              />
              <br/>
        <label>Avatar</label>
        <input
          type="url"
          placeholder="Image Url"
          onChange={(e) => handle(e)}
          id="image"
          value={data.image}
        />
        <br />
        <label>Data</label>
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => handle(e)}
          id="date"
          value={data.date}
        />
        <br />
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => handle(e)}
          id="title"
          value={data.title}
        />
        <br />
        <label>Mobile</label>
        <input
          type="text"
          placeholder="Mobile"
          onChange={(e) => handle(e)}
          id="mobile"
          value={data.mobile}
        />
        <label>Mobile</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
        />
        <br />
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            borderRadius: "15px",
            marginTop: "10px",
          }}
        >
          Save Data
        </button>
      </form>
    </div>
  );
}

export default PostData