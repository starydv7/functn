import React,{useState} from 'react'
import axios from "axios";
const PostData = () => {
    const [data, setData] = useState({
        name: "",
        date: "",
        title: "",
        mobile: "",
        email:'',
    })
    function submit(e) {
        e.preventDefault();
        axios.post("https://apipawan3.herokuapp.com/users", {
            name: data.name,
            date: data.date,
            title: data.title,
            mobile: data.mobile,
            email:data.email,
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
          placeholder="name"
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
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
        <button style={{}}>Save Data</button>
      </form>
    </div>
  );
}

export default PostData