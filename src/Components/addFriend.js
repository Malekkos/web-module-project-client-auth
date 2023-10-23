import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = { name: "", email: ""}

const AddFriend = () => {
  const [friendDetails, setFriendDetails] = useState(initialState)
  const navigate = useNavigate()
useEffect(() => {
  const token = localStorage.getItem("token")
  // console.log(token)
  token ? console.log("there is a token"): navigate("/login")
}, [])
  const onChange = event => {
    event.preventDefault()
    setFriendDetails({...friendDetails, [event.target.name]: event.target.value})
  }
  const onSubmit = event => {
    const token = localStorage.getItem("token")
    event.preventDefault()
    axios.post("http://localhost:9000/api/friends",  friendDetails, {headers: {authorization: token}})
    .then(res => {
      console.log(res)
      setFriendDetails(initialState)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={event => onSubmit(event)}>
      <div className="addFriendWrapper">
        <h1 className="addFriendTitle">Add Friend</h1>
        <div className="addFriendName">
          <label className="friendName">Friend Name</label>
          <input type="text" onChange={event => onChange(event)} name="name" value={friendDetails.name} />
        </div>
        <div>
          <label>Friend Email</label>
          <input type="email" onChange={event => onChange(event)} name="email" value={friendDetails.email} />
        </div>
        <div>
          <input disabled={friendDetails.name == "" || friendDetails.email == "" ? true : false} type="submit" />
        </div>
      </div>
    </form>
  )
}

export default AddFriend