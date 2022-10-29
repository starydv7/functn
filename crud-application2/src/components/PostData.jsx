import React,{useState} from 'react'
import axios from "axios";
const PostData = () => {
    const [data, setData] = useState({
        name: "",
        date: "",
        title: "",
        mobile:"",
    })
    function submit(e) {
        e.preventDefault();
        axios.post("https://apipawan3.herokuapp.com/users", {
            name: data.name,
            date: data.date,
            title: data.title,
            mobile:data.mobile,
        })
            .then((res) => {
                console.log(res.data);
        })
    }
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" placeholder="name" />
        <br />
        <label>Data</label>
              <input type="text" placeholder="Date" />
              <br />
              <label>Title</label>
              <input type="text" placeholder="Title" />
              <br/>
              <label>Mobile</label>
              <input type="text" placeholder="Mobile"/>
      </form>
    </div>
  );
}

export default PostData