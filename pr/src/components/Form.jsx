import React, { useState } from "react";
import Pagination from "react-js-pagination";

const User = () => {
    const [data, setData] = useState([]);
    const [adults, setAdults] = useState("");
    const [capacity, setCapacity] = useState("");
    const [cost, setCost] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [typerooms, setTypeRooms] = useState("");
    const [bedtypes, setBedTypes] = useState("");
    const [img_url, setImg_Url] = useState("");
    const [booked, setBooked] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        var DetailsObj = {
            adults: adults,
            capacity: capacity,
            cost: cost,
            category: category,
            typerooms: typerooms,
            bedtypes: bedtypes,
            img_url: img_url,
            booked: booked,
        };
        fetch("https://apipawan3.herokuapp.com/users", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(DetailsObj),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {});
    };
    //   const FetchData = () => {
    //     fetch(
    //       "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
    //     )
    //       .then((res) => res.json())
    //       .then((res) => {
    //         setData(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   useEffect(() => {
    //     FetchData();
    //   }, []);
    //   const sorthandle = (e) => {
    //     const { value } = e.target;

    //     if (value === "asc") {
    //       const newdata = data.sort((a, b) => {
    //         return a.cost - b.cost;
    //       });
    //       setData([...newdata]);
    //       console.log(newdata);
    //     }
    //     if (value === "desc") {
    //       const newdata = data.sort((a, b) => {
    //         return b.cost - a.cost;
    //       });
    //       setData([...newdata]);
    //       console.log(newdata);
    //     }
    //   };

    //   const filterhandle = (e) => {
    //     const { value } = e.target;
    //     if (value !== "empty") {
    //       fetch(`https://api-pawan.herokuapp.com/hotels/category/${value}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           // setData([...res]);
    //           console.log(res);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   };
    //   function Deletedata(id) {
    //     fetch(`https://api-pawan.herokuapp.com/hotels/${id}`, {
    //       method: "DELETE",

    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((res) => {
    //         console.log(res);
    //         FetchData();
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    //   function Editdata(id) {
    //     localStorage.setItem("newid", id);
    //   }
    // const handlePageChange = (pageNumber) => {
    //       console.log(`active page is ${pageNumber}`);
    //       axios
    //         .get(
    //           `https://apipawan3.herokuapp.com/users?_page=${pageNumber}&_limit=20`
    //         )
    //         .then((res) => {
    //           this.setState({
    //             data: res.data,
    //           });
    //         });
    //       this.setState({ activePage: pageNumber });
    // }
//      handlePageChange = pageNumber => {
//     console.log(`active page is ${pageNumber}`);
//     axios
//       .get(
//         `https://apipawan3.herokuapp.com/users?_page=${pageNumber}&_limit=20`
//       )
//       .then(res => {
//         this.setState({
//           data: res.data
//         });
//       });
//     this.setState({ activePage: pageNumber });
//   };
//   render() {
//     const allData = this.state.data.map(item => {
//       return <li key={item.id}>{item.mobileNumber}
//       </li>
//     });
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="/">Category</option>
            <option value="deluxe">Deluxe</option>
            <option value="family">Family</option>
            <option value="suite">Suite</option>
          </select>
          <select
            value={typerooms}
            onChange={(e) => setTypeRooms(e.target.value)}
          >
            <option value="/">Type of Rooms</option>
            <option value="ac">AC</option>
            <option value="non-ac">Non-Ac</option>
          </select>
          <select
            value={bedtypes}
            onChange={(e) => setBedTypes(e.target.value)}
          >
            <option value="/">Type of Bed</option>
            <option value="double">Double</option>
            <option value="single">Single</option>
          </select>
          <input
            type="text"
            value={adults}
            placeholder="Adults"
            onChange={(e) => setAdults(e.target.value)}
          />
          <input
            type="text"
            value={capacity}
            placeholder="Capacity"
            onChange={(e) => setCapacity(e.target.value)}
          />

          <input
            type="text"
            value={cost}
            placeholder="Price"
            onChange={(e) => setCost(e.target.value)}
          />
          <input
            type="url"
            placeholder="img url"
            value={img_url}
            onChange={(e) => setImg_Url(e.target.value)}
          />
          <input
            type="checked"
            value={booked}
            onChange={(e) => setBooked(e.target.value)}
          />

          <button type="submit">Submit</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        <p>React pagination test</p>
        <ul>{allData}</ul>
        <Pagination
          totalItemsCount={450}
          onChange={handlePageChange}
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          pageRangeDisplayed={5}
        />
      </div>
    );
}
export default User;
