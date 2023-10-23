import React, {useState} from "react";
import axios from "axios";
const initialState = { name: "", email: ""}

const AddFriend = () => {
  const [friendDetails, setFriendDetails] = useState(initialState)

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
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={event => onSubmit(event)}>
      <div>
        <h1>Add Friend</h1>
        <div>
          <label>Friend Name</label>
          <input type="text" onChange={event => onChange(event)} name="name" value={friendDetails.name} />
        </div>
        <div>
          <label>Friend Email</label>
          <input type="email" onChange={event => onChange(event)} name="email" value={friendDetails.email} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  )
}

export default AddFriend