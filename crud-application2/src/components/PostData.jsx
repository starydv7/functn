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
    <div>PostData</div>
  )
}

export default PostData